require.config({paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});

require(["vs/editor/editor.main"], function() {
  (function() {
      //function to read the user uploaded TD files     
      function onChange(event) {
          var reader = new FileReader();
          reader.onload = onReaderLoad;
          reader.readAsText(event.target.files[0]);
      }

      // function that gets executed when the uploaded file is done reading 
      function onReaderLoad(event) {
          // it parses the json data object from the file to the variable obj
          var obj = JSON.parse(event.target.result);
          if (localStorage.getItem('theme') === 'theme-dark'){
            fetch('Dracula.json')
            .then(data => data.json())
            .then(data => {
              monaco.editor.defineTheme('dracula', data);
              monaco.editor.setTheme('dracula');
            })  
          }
         else {
          fetch('Dawn.json')
            .then(data => data.json())
            .then(data => {
              monaco.editor.defineTheme('dawn', data);
              monaco.editor.setTheme('dawn');
            })  
         }
          var modelUri = monaco.Uri.parse("a://b/foo.json"); // a made up unique URI for our model
          // dispose of any old model before creating the new one.
          monaco.editor.getModels().forEach(model => model.dispose());

          const model = monaco.editor.createModel(JSON.stringify(obj, null, '\t'), "json", modelUri);
          
          // configure the JSON language support with the TD schema 
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
              validate: true,
              schemas: [{
                      fileMatch: [modelUri.toString()], // associate with our model
                      schema: schema_v2,
                  },
              ],
             });
               
         
            let ed = monaco.editor.create(document.querySelector("#results"), {model: model,});
          

            ed.onDidChangeModelContent((e) => {
              var new_value = model.getValue();
              document.getElementById('save-btn').onclick =
                            function () {
                                var a = document.createElement("a");
                                var file = new Blob([new_value], {type: 'text/json'});
                                a.href = URL.createObjectURL(file);
                                a.download = 'Td.json';
                                a.click();
                                }

              const Ajv = window.ajv7;
              const ajv = new Ajv({strict: false,allErrors: true })
                  const validate = ajv.compile(schema_v2)
                  console.log(new_value);
                  try {
                    var myobj = JSON.parse( JSON.stringify(new_value) );
                    console.log(typeof myobj);
                    console.log(typeof new_value);
                    test(JSON.parse(myobj)); //myobj is string not object 
                    //function to validate the TD and display the results
                    function test(data) {
                      const valid = validate(data)
                      if (valid) {
                        const validation = document.querySelector('.validation pre');
                        validation.innerHTML = "";
                        const div = document.createElement('div');
                            div.className = `alert-container`;
                            div.style = 'font-size: 18px; margin-bottom: 10px';
                            div.role = 'alert';
                            div.innerHTML = `<div class="valid-alert"></i></div><div class='alert alert-success'><span><b>valid! </b></span></div>`
                            validation.appendChild(div);
                      } else {
                          const validation = document.querySelector('.validation pre');
                          validation.innerHTML = "";

                          for (var i = 0 ; i< validate.errors.length;i++){
                            var result = "data"+validate.errors[i].instancePath + " "+validate.errors[i].message;
                            result = result.replaceAll("/", ".");
                            const div = document.createElement('div');

                            div.className = 'alert-container';
                            div.style = 'font-size: 18px; margin-bottom: 10px';
                            div.role = 'alert';
                            div.innerHTML = `<div class="invalid-alert"></i></div><div class='alert alert-danger'><span><b>invalid! </b>: </span>`+ result+`</div>`;
                            validation.appendChild(div);

                          }
                          
                      }
                  }
                  } catch(e){
                    const validation = document.querySelector('.validation pre');
                    validation.innerText = " "
                  }         
           });
      }
      //An event listener that listens if a file is uploaded 
      document.getElementById('input').addEventListener('change', onChange);

  }());

});