var form = [{
    "type": "fieldset",
    "items": [{
        "type": "tabs",
        "id": "navtabs",
        "items": [{
                "title": "Thing",
                "type": "tab",
                "items": [
                    {
                        "type": "section",
                        "title": "section1",
                        "items": [
                          "@context",
                          "title",
                           {
                            "key": "id",
                            "type": "url"
                           },
                          "description",
                            {
                                "key": "created",
                                "type":"datetime-local"
                            },
                            {
                                "key": "modified",
                                "type":"datetime-local"
                            },
                          "base",
                          "support"
                        ],
                        "htmlClass": "form-group col-md-4 section section1"

                      },
                      {
                        "type": "section",
                        "title": "section2",
                        "items": [
                          "version",
                          {
                            "key": "securityDefinitions",
                            "type": "checkboxes",
                            "titleMap": {
                                "nosec": "nosec",
                                "basic": "basic",
                                "digest": "digest",
                                "bearer": "bearer",
                                "psk": "psk",
                                "apikey": "apikey"
                            }
                           },
                           "links"
                        ],
                        "htmlClass": "form-group col-md-4 section section2"

                      },
                      {
                        "type": "section",
                        "title": "section3",
                        "items": [
                            {
                                "type": "selectfieldset",
                                "title": "Choose security data type",
                                "items": [{
                                        "key": "security",
                                        "legend": "string"
                                    },
                                    {
                                        "key": "security_array",
                                        "legend": "array of strings"
                                    }
                                ]
                            },
                            {
                                "type": "selectfieldset",
                                "title": "Choose type",
                                "items": [{
                                        "key": "@type",
                                        "legend": "string"
                                    },
                                    {
                                        "key": "@type_array",
                                        "legend": "array of strings"
                                    }
                                ]
                            },
                            {
                                "type": "selectfieldset",
                                "title": "Choose profile data type",
                                "items": [{
                                    "key": "profile",
                                    "legend": "string"
                                }, 
                                {
                                    "key": "profile_array",
                                    "legend": "array of strings"
                                }]
                            },
                            "forms"

                        ],
                        "htmlClass": "form-group col-md-4 section section3"

                      }
                ]
            },

            {
                "title": "Properties",
                "type": "tab",
                "htmlClass": "form-group col-md-12 big-section",

                "items": [{
                    "type": "tabarray",
                    "draggable": true,
                    "items": {
                        "type": "section",
                        "legend": "property {{idx}}",
                        "items": [{
                                "key": "propertiess[].property_title"
                            },
                            {
                                "key": "propertiess[].@type"
                            },
                            {
                                "key": "propertiess[].forms"
                            },
                            {
                                "key": "propertiess[].description"
                            },
                            {
                                "key": "propertiess[].observable",
                                "inlinetitle": "observable"
                            }
                        ],
                        "htmlClass": "form-group section4"
                    }
                }]
            },
            {
                "title": "Actions",
                "htmlClass": "form-group col-md-12 big-section",
                "type": "tab",
                "items": [{
                    "type": "tabarray",
                    "draggable": true,
                    "items": {
                        "type": "section",
                        "legend": "action {{idx}}",
                        "items": [{
                                "key": "actions[].Action_title"
                            },
                            {
                                "key": "actions[].@type"
                            },
                            {
                                "key": "actions[].forms"
                            },
                            {
                                "key": "actions[].description"
                            },
                            {
                                "key": "actions[].safe"
                            },
                            {
                                "key": "actions[].idempotent"
                            },
                            {
                                "key": "actions[].synchronous"
                            }
                        ],
                        "htmlClass": "form-group section4"
                    }
                }]
            },
            {
                "title": "Events",
                "type": "tab",
                "htmlClass": "form-group col-md-12 big-section",
                "items": [{
                    "type": "tabarray",
                    "draggable": true,
                    "items": {
                        "type": "section",
                        "legend": "event {{idx}}",
                        "items": [{
                                "key": "events[].event_title"
                            },
                            {
                                "key": "events[].@type"
                            },
                            {
                                "key": "events[].forms"
                            },
                            {
                                "key": "events[].description"
                            }

                        ],
                        "htmlClass": "form-group section4"
                    }
                }]
            }
        ]
    }]
},

{
    "type": "actions",
    "items": [{
        "type": "submit",
        "value": "Submit",
        "htmlClass": "btn submit-btn btn-lg"
    }]
}
]

var schema = {
	"@context": {
		"type": "string",
		"title": "@context",
		"required": true,
		"default": "https://www.w3.org/2022/wot/td/v1.1"
	},
	"id": {
		"type": "string"
	},
	"@type": {
		"type": "string",
		"title": "@type"
	},
	"@type_array": {
		"type": "array",
		"title": "@type",
		"items": {
			"type": "string",
			"title": "@type"
		}
	},

	"title": {
		"type": "string",
		"required": true
	},
	"description": {
		"type": "string"
	},
	"version": {
		"type": "object",
		"title":"version:",
		"properties":{
			"instance":{
				"title":"version instance",
				"type":"string"
			//	"default":" "
			},
			"model":{
				"title": "version model",
				"type": "string"
			}
		}
	},
	"created": {
		"type": "string"
	},
	"modified": {
		"type": "string"
	},
	"support": {
		"type": "string"
	},
	"base": {
		"type": "string"
	},
	"links": {
		"type": "array",
		"title": "links",
		"items": {
			"type": "object",
			"properties": {
				"href": {
					"title":"href",
					"type": "string"
				}
			}
		}
	},
	"forms": {
		"type": "array",
		"items": {
			"type": "object",
			"properties": {
				"href": {
					"title":"href",
					"type": "string"
				}
			}
		}
	},
	"security": {
		"type": "string",
		"title": "security",
    "required": true

	},
	"security_array": {
		"type": "array",
		"title": "security",
		"items": {
			"type": "string",
			"title": "security"
		},
	},
	"securityDefinitions": {
		"type": "array",
		"required": true,
		"items": {
			"type": "string",
			"required":true,
			"title": "securityDefinitions",
			"enum": [
				"nosec",
				"basic",
				"digest",
				"bearer",
				"psk",
				"apikey"
			]
		}

	},
	"profile": {
		"type": "string"
	},
	"profile_array": {
		"type": "array",
		"title": "profile",
		"items": {
			"type": "string",
			"title": "profile"
		}
	},
	"propertiess": {
		"type": "array",
		"title": "properties",
		"items": {
			"type": "object",
			"properties": {
				"property_title": {
					"type": "string",
					"title": "Property title"
				},
				"@type": {
					"type": "string",
					"title": "@type"
				},
				"forms": {
					"title": "forms",
					"type": "array",
					"items": {
						"type": "object",
						"properties":{
							"href":{
								"title":"href",
								"type":"string",
								"required":true,
								"default":" "
							}
						}
					}
				},
				"description": {
					"title": "description",
					"type": "string"
				},

				"observable": {
					"type": "boolean",
					"title": "observable"
				}

			}
		}
	},
	"actions": {
		"type": "array",
		"items": {
			"type": "object",
			"title": "Actions",
			"properties": {
				"Action_title": {
					"type": "string",
					"title": "Action title"
				},
				"@type": {
					"type": "string",
					"title": "@type"
				},
				"forms": {
					"title": "forms",
					"type": "array",
					"items": {
						"type": "object",
						"properties":{
							"href":{
								"title":"href",
								"type":"string",
								"required":true,
								"default":" "
							}
						}
					}
				},
				"description": {
					"title": "description",
					"type": "string"
				},
				"safe": {
					"type": "boolean",
					"title": "safe"
				},
				"idempotent": {
					"type": "boolean",
					"title": "idempotent"
				},
				"synchronous": {
					"type": "boolean",
					"title": "synchronous"
				}
			}
		}
	},
	"events": {
		"type": "array",
		"title": "events",
		"items": {
			"type": "object",
			"properties": {
				"event_title": {
					"type": "string",
					"title": "Event title"
				},
				"@type": {
					"type": "string",
					"title": "@type"
				},
				"forms": {
					"title": "forms",
					"type": "array",
					"items": {
						"type": "object",
						"properties":{
							"href":{
								"title":"href",
								"type":"string",
								"default":" ",
								"required":true
							}
						}
					}
				},
				"description": {
					"title": "description",
					"type": "string"
				}
			}
		}
	}
}
var schema_v2 = {
    "title": "Thing Description",
    "version": "1.1-05-September-2022",
    "description": "JSON Schema for validating TD instances against the TD information model. TD instances can be with or without terms that have default values",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id":"https://raw.githubusercontent.com/w3c/wot-thing-description/main/validation/td-json-schema-validation.json",
    "definitions": {
      "anyUri": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "descriptions": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "title": {
        "type": "string"
      },
      "titles": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "security": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems":1
          },
          {
            "type": "string"
          }
        ]
      },
      "scopes": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          {
            "type": "string"
          }
        ]
      },
      "subprotocol": {
        "type": "string",
        "examples": [
          "longpoll",
          "websub",
          "sse"
        ]
      },
      "thing-context-td-uri-v1": {
        "type": "string",
        "const": "https://www.w3.org/2019/wot/td/v1"
      },
      "thing-context-td-uri-v1.1": {
        "type": "string",
        "const": "https://www.w3.org/2022/wot/td/v1.1"
      },
      "thing-context-td-uri-temp": {
        "type": "string",
        "const": "http://www.w3.org/ns/td"
      },
      "thing-context": {
        "anyOf": [
          {
            "$comment":"New context URI with other vocabularies after it but not the old one",
            "type": "array",
            "items": [
              {
                "$ref": "#/definitions/thing-context-td-uri-v1.1"
              }
            ],
            "additionalItems": {
              "anyOf": [
                {
                  "$ref": "#/definitions/anyUri"
                },
                {
                  "type": "object"
                }
              ],
              "not":{
                "$ref": "#/definitions/thing-context-td-uri-v1"
              }
            }
          },
          {
            "$comment":"Only the new context URI",
            "$ref": "#/definitions/thing-context-td-uri-v1.1"
          },
          {
            "$comment":"Old context URI, followed by the new one and possibly other vocabularies. minItems and contains are required since prefixItems does not say all items should be provided",
            "type": "array",
            "prefixItems": [
              {
                "$ref": "#/definitions/thing-context-td-uri-v1"
              },
              {
                "$ref": "#/definitions/thing-context-td-uri-v1.1"
              }
            ],
            "minItems":2,
            "contains":{
              "$ref": "#/definitions/thing-context-td-uri-v1.1"
            },
            "additionalItems": {
              "anyOf": [
                {
                  "$ref": "#/definitions/anyUri"
                },
                {
                  "type": "object"
                }
              ]
            }
          },
          {
            "$comment": "Old context URI, followed by possibly other vocabularies. minItems and contains are required since prefixItems does not say all items should be provided",
            "type": "array",
            "prefixItems": [{
              "$ref": "#/definitions/thing-context-td-uri-v1"
            }],
            "minItems": 1,
            "contains": {
              "$ref": "#/definitions/thing-context-td-uri-v1"
            },
            "additionalItems": {
              "anyOf": [{
                "$ref": "#/definitions/anyUri"
              },
              {
                "type": "object"
              }
             ]
            }
          },
          {
            "$comment":"Only the old context URI",
            "$ref": "#/definitions/thing-context-td-uri-v1"
          }
        ]
      },
      "bcp47_string":{
        "type":"string",
        "pattern": "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$"
      },
      "type_declaration": {
        "oneOf": [
          {
            "type": "string",
            "not": {
              "const": "tm:ThingModel"
            }
          },
          {
            "type": "array",
            "items": {
              "type": "string",
              "not": {
                "const": "tm:ThingModel"
              }
            }
          }
        ]
      },
      "dataSchema-type": {
        "type": "string",
        "enum": [
          "boolean",
          "integer",
          "number",
          "string",
          "object",
          "array",
          "null"
        ]
      },
      "dataSchema": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "title": {
            "$ref": "#/definitions/title"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "titles": {
            "$ref": "#/definitions/titles"
          },
          "writeOnly": {
            "type": "boolean"
          },
          "readOnly": {
            "type": "boolean"
          },
          "oneOf": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "unit": {
            "type": "string"
          },
          "enum": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true
          },
          "format": {
            "type": "string"
          },
          "const": {},
          "default": {},
          "contentEncoding": {
            "type": "string"
          },
          "contentMediaType": {
            "type": "string"
          },
          "type": {
            "$ref": "#/definitions/dataSchema-type"
          },
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/dataSchema"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/dataSchema"
                }
              }
            ]
          },
          "maxItems": {
            "type": "integer",
            "minimum": 0
          },
          "minItems": {
            "type": "integer",
            "minimum": 0
          },
          "minimum": {
            "type": "number"
          },
          "maximum": {
            "type": "number"
          },
          "exclusiveMinimum": {
            "type": "number"
          },
          "exclusiveMaximum": {
            "type": "number"
          },
          "minLength": {
            "type": "integer",
            "minimum": 0
          },
          "maxLength": {
            "type": "integer",
            "minimum": 0
          },
          "multipleOf": {
            "$ref": "#/definitions/multipleOfDefinition"
          },
          "properties": {
            "additionalProperties": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "required": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "additionalResponsesDefinition": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "contentType": {
              "type": "string"
            },
            "schema": {
              "type": "string"
            },
            "success": {
              "type": "boolean"
            }
          }
        }
      },
      "multipleOfDefinition": {
        "type": [
          "integer",
          "number"
        ],
        "exclusiveMinimum": 0
      },
      "expectedResponse": {
        "type": "object",
        "properties": {
          "contentType": {
            "type": "string"
          }
        }
      },
      "form_element_base": {
        "type": "object",
        "properties": {
          "op": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "href": {
            "$ref": "#/definitions/anyUri"
          },
          "contentType": {
            "type": "string"
          },
          "contentCoding": {
            "type": "string"
          },
          "subprotocol": {
            "$ref": "#/definitions/subprotocol"
          },
          "security": {
            "$ref": "#/definitions/security"
          },
          "scopes": {
            "$ref": "#/definitions/scopes"
          },
          "response": {
            "$ref": "#/definitions/expectedResponse"
          },
          "additionalResponses": {
            "$ref": "#/definitions/additionalResponsesDefinition"
          }
        },
        "required": [
          "href"
        ],
        "additionalProperties": true
      },
      "form_element_property": {
        "allOf":[{"$ref":"#/definitions/form_element_base"}],
        "type": "object",
        "properties": {
          "op": {
            "oneOf": [
              {
                "type": "string",
                "enum": [
                  "readproperty",
                  "writeproperty",
                  "observeproperty",
                  "unobserveproperty"
                ]
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "readproperty",
                    "writeproperty",
                    "observeproperty",
                    "unobserveproperty"
                  ]
                }
              }
            ]
          }
        },
        "additionalProperties": true
      },
      "form_element_action": {
        "allOf":[{"$ref":"#/definitions/form_element_base"}],
        "type": "object",
        "properties": {
          "op": {
            "oneOf": [
              {
                "type": "string",
                "enum": [
                  "invokeaction",
                  "queryaction",
                  "cancelaction"
                ]
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "invokeaction",
                    "queryaction",
                    "cancelaction"
                  ]
                }
              }
            ]
          }
        },
        "additionalProperties": true
      },
      "form_element_event": {
        "allOf":[{"$ref":"#/definitions/form_element_base"}],
        "type": "object",
        "properties": {
          "op": {
            "oneOf": [
              {
                "type": "string",
                "enum": [
                  "subscribeevent",
                  "unsubscribeevent"
                ]
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "subscribeevent",
                    "unsubscribeevent"
                  ]
                }
              }
            ]
          }
        },
        "additionalProperties": true
      },
      "form_element_root": {
        "allOf":[{"$ref":"#/definitions/form_element_base"}],
        "type": "object",
        "properties": {
          "op": {
            "oneOf": [
              {
                "type": "string",
                "enum": [
                  "readallproperties",
                  "writeallproperties",
                  "readmultipleproperties",
                  "writemultipleproperties",
                  "observeallproperties",
                  "unobserveallproperties",
                  "queryallactions",
                  "subscribeallevents",
                  "unsubscribeallevents"
                ]
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "readallproperties",
                    "writeallproperties",
                    "readmultipleproperties",
                    "writemultipleproperties",
                    "observeallproperties",
                    "unobserveallproperties",
                    "queryallactions",
                    "subscribeallevents",
                    "unsubscribeallevents"
                  ]
                }
              }
            ]
          }
        },
        "additionalProperties": true,
        "required":["op"]
      },
      "form" : {
        "$comment":"This is NOT for validation purposes but for automatic generation of TS types. For more info, please see: https://github.com/w3c/wot-thing-description/pull/1319#issuecomment-994950057",
        "oneOf": [
             {  "$ref" : "#/definitions/form_element_property" },
             {  "$ref" : "#/definitions/form_element_action" },
             {  "$ref" : "#/definitions/form_element_event" },
             {  "$ref" : "#/definitions/form_element_root" }
         ]
      },
      "property_element": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "title": {
            "$ref": "#/definitions/title"
          },
          "titles": {
            "$ref": "#/definitions/titles"
          },
          "forms": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/definitions/form_element_property"
            }
          },
          "uriVariables": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "observable": {
            "type": "boolean"
          },
          "writeOnly": {
            "type": "boolean"
          },
          "readOnly": {
            "type": "boolean"
          },
          "oneOf": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "unit": {
            "type": "string"
          },
          "enum": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true
          },
          "format": {
            "type": "string"
          },
          "const": {},
          "default": {},
          "type": {
            "$ref": "#/definitions/dataSchema-type"
          },
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/dataSchema"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/dataSchema"
                }
              }
            ]
          },
          "maxItems": {
            "type": "integer",
            "minimum": 0
          },
          "minItems": {
            "type": "integer",
            "minimum": 0
          },
          "minimum": {
            "type": "number"
          },
          "maximum": {
            "type": "number"
          },
          "exclusiveMinimum": {
            "type": "number"
          },
          "exclusiveMaximum": {
            "type": "number"
          },
          "minLength": {
            "type": "integer",
            "minimum": 0
          },
          "maxLength": {
            "type": "integer",
            "minimum": 0
          },
          "multipleOf": {
            "$ref": "#/definitions/multipleOfDefinition"
          },
          "properties": {
            "additionalProperties": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "required": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "forms"
        ],
        "additionalProperties": true
      },
      "action_element": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "title": {
            "$ref": "#/definitions/title"
          },
          "titles": {
            "$ref": "#/definitions/titles"
          },
          "forms": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/definitions/form_element_action"
            }
          },
          "uriVariables": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "input": {
            "$ref": "#/definitions/dataSchema"
          },
          "output": {
            "$ref": "#/definitions/dataSchema"
          },
          "safe": {
            "type": "boolean"
          },
          "idempotent": {
            "type": "boolean"
          },
          "synchronous": {
            "type": "boolean"
          }
        },
        "required": [
          "forms"
        ],
        "additionalProperties": true
      },
      "event_element": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "title": {
            "$ref": "#/definitions/title"
          },
          "titles": {
            "$ref": "#/definitions/titles"
          },
          "forms": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/definitions/form_element_event"
            }
          },
          "uriVariables": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/dataSchema"
            }
          },
          "subscription": {
            "$ref": "#/definitions/dataSchema"
          },
          "data": {
            "$ref": "#/definitions/dataSchema"
          },
          "dataResponse": {
            "$ref": "#/definitions/dataSchema"
          },
          "cancellation": {
            "$ref": "#/definitions/dataSchema"
          }
        },
        "required": [
          "forms"
        ],
        "additionalProperties": true
      },
      "base_link_element": {
        "type": "object",
        "properties": {
          "href": {
            "$ref": "#/definitions/anyUri"
          },
          "type": {
            "type": "string"
          },
          "rel": {
            "type": "string"
          },
          "anchor": {
            "$ref": "#/definitions/anyUri"
          },
          "hreflang": {
              "anyOf":[
                {"$ref": "#/definitions/bcp47_string"},
                {
                  "type":"array",
                  "items":{
                    "$ref": "#/definitions/bcp47_string"
                  }
                }
              ]
          }
        },
        "required": [
          "href"
        ],
        "additionalProperties": true
      },
      "link_element": {
        "allOf": [
          {
            "$ref": "#/definitions/base_link_element"
          },
          {
            "not": {
              "description": "A basic link element should not contain sizes",
              "type": "object",
              "properties": {
                "sizes": {}
              },
              "required": [
                "sizes"
              ]
            }
          },
          {
            "not": {
              "description": "A basic link element should not contain icon or tm:extends",
              "properties": {
                "rel": {
                  "enum": [
                    "icon",
                    "tm:extends"
                  ]
                }
              },
              "required": [
                "rel"
              ]
            }
          }
        ]
      },
      "icon_link_element": {
        "allOf": [
          {
            "$ref": "#/definitions/base_link_element"
          },
          {
            "properties": {
              "rel": {
                "const": "icon"
              },
              "sizes": {
                "type": "string",
                "pattern": "[0-9]*x[0-9]+"
              }
            },
            "required": [
              "rel"
            ]
          }
        ]
      },
      "additionalSecurityScheme": {
        "description": "Applies to additional SecuritySchemes not defined in the WoT TD specification.",
        "$comment": "Additional SecuritySchemes should always be defined via a context extension, using a prefixed value for the scheme. This prefix (e.g. 'ace', see the example below) must contain at least one character in order to reference a valid JSON-LD context extension.",
        "examples": [
          {
            "scheme": "ace:ACESecurityScheme",
            "ace:as": "coaps://as.example.com/token",
            "ace:audience": "coaps://rs.example.com",
            "ace:scopes": ["limited", "special"],
            "ace:cnonce": true
          }
        ],
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "pattern": ".+:.*"
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "noSecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "nosec"
            ]
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "autoSecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "auto"
            ]
          }
        },
        "not":{
          "required":["name"]
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "comboSecurityScheme": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "@type": {
                "$ref": "#/definitions/type_declaration"
              },
              "description": {
                "$ref": "#/definitions/description"
              },
              "descriptions": {
                "$ref": "#/definitions/descriptions"
              },
              "proxy": {
                "$ref": "#/definitions/anyUri"
              },
              "scheme": {
                "type": "string",
                "enum": [
                  "combo"
                ]
              },
              "oneOf": {
                "type": "array",
                "minItems": 2,
                "items": {
                  "type": "string"
                }
              }
            },
            "required": [
              "scheme",
              "oneOf"
            ],
            "additionalProperties": true
          },
          {
            "type": "object",
            "properties": {
              "@type": {
                "$ref": "#/definitions/type_declaration"
              },
              "description": {
                "$ref": "#/definitions/description"
              },
              "descriptions": {
                "$ref": "#/definitions/descriptions"
              },
              "proxy": {
                "$ref": "#/definitions/anyUri"
              },
              "scheme": {
                "type": "string",
                "enum": [
                  "combo"
                ]
              },
              "allOf": {
                "type": "array",
                "minItems": 2,
                "items": {
                  "type": "string"
                }
              }
            },
            "required": [
              "scheme",
              "allOf"
            ],
            "additionalProperties": true
          }
        ]
      },
      "basicSecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "basic"
            ]
          },
          "in": {
            "type": "string",
            "enum": [
              "header",
              "query",
              "body",
              "cookie",
              "auto"
            ]
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "digestSecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "digest"
            ]
          },
          "qop": {
            "type": "string",
            "enum": [
              "auth",
              "auth-int"
            ]
          },
          "in": {
            "type": "string",
            "enum": [
              "header",
              "query",
              "body",
              "cookie",
              "auto"
            ]
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "apiKeySecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "apikey"
            ]
          },
          "in": {
            "type": "string",
            "enum": [
              "header",
              "query",
              "body",
              "cookie",
              "uri",
              "auto"
            ]
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "bearerSecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "bearer"
            ]
          },
          "authorization": {
            "$ref": "#/definitions/anyUri"
          },
          "alg": {
            "type": "string"
          },
          "format": {
            "type": "string"
          },
          "in": {
            "type": "string",
            "enum": [
              "header",
              "query",
              "body",
              "cookie",
              "auto"
            ]
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "pskSecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "psk"
            ]
          },
          "identity": {
            "type": "string"
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "oAuth2SecurityScheme": {
        "type": "object",
        "properties": {
          "@type": {
            "$ref": "#/definitions/type_declaration"
          },
          "description": {
            "$ref": "#/definitions/description"
          },
          "descriptions": {
            "$ref": "#/definitions/descriptions"
          },
          "proxy": {
            "$ref": "#/definitions/anyUri"
          },
          "scheme": {
            "type": "string",
            "enum": [
              "oauth2"
            ]
          },
          "authorization": {
            "$ref": "#/definitions/anyUri"
          },
          "token": {
            "$ref": "#/definitions/anyUri"
          },
          "refresh": {
            "$ref": "#/definitions/anyUri"
          },
          "scopes": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              {
                "type": "string"
              }
            ]
          },
          "flow": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "string",
                "enum": [
                  "code",
                  "client",
                  "device"
                ]
              }
            ]
          }
        },
        "required": [
          "scheme"
        ],
        "additionalProperties": true
      },
      "securityScheme": {
        "oneOf": [
          {
            "$ref": "#/definitions/noSecurityScheme"
          },
          {
            "$ref": "#/definitions/autoSecurityScheme"
          },
          {
            "$ref": "#/definitions/comboSecurityScheme"
          },
          {
            "$ref": "#/definitions/basicSecurityScheme"
          },
          {
            "$ref": "#/definitions/digestSecurityScheme"
          },
          {
            "$ref": "#/definitions/apiKeySecurityScheme"
          },
          {
            "$ref": "#/definitions/bearerSecurityScheme"
          },
          {
            "$ref": "#/definitions/pskSecurityScheme"
          },
          {
            "$ref": "#/definitions/oAuth2SecurityScheme"
          },
          {
            "$ref": "#/definitions/additionalSecurityScheme"
          }
        ]
      }
    },
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "format": "uri"
      },
      "title": {
        "$ref": "#/definitions/title"
      },
      "titles": {
        "$ref": "#/definitions/titles"
      },
      "properties": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/property_element"
        }
      },
      "actions": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/action_element"
        }
      },
      "events": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/event_element"
        }
      },
      "description": {
        "$ref": "#/definitions/description"
      },
      "descriptions": {
        "$ref": "#/definitions/descriptions"
      },
      "version": {
        "type": "object",
        "properties": {
          "instance": {
            "type": "string"
          }
        },
        "required": [
          "instance"
        ]
      },
      "links": {
        "type": "array",
        "items": {
          "oneOf": [
            {
              "$ref": "#/definitions/link_element"
            },
            {
              "$ref": "#/definitions/icon_link_element"
            }
          ]
        }
      },
          "forms": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/definitions/form_element_root"
            }
          },
      "base": {
        "$ref": "#/definitions/anyUri"
      },
      "securityDefinitions": {
        "type": "object",
        "minProperties": 1,
        "additionalProperties": {
          "$ref": "#/definitions/securityScheme"
        }
      },
      "schemaDefinitions": {
        "type": "object",
        "minProperties": 1,
        "additionalProperties": {
          "$ref": "#/definitions/dataSchema"
        }
      },
      "support": {
        "$ref": "#/definitions/anyUri"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
      "modified": {
        "type": "string",
        "format": "date-time"
      },
      "profile": {
        "oneOf": [
          {
            "$ref": "#/definitions/anyUri"
          },
          {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/definitions/anyUri"
            }
          }
        ]
      },
      "security": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "minItems": 1,
            "items": {
              "type": "string"
            }
          }
        ]
      },
      "uriVariables": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/dataSchema"
        }
      },
      "@type": {
        "$ref": "#/definitions/type_declaration"
      },
      "@context": {
        "$ref": "#/definitions/thing-context"
      }
    },
    "required": [
      "title",
      "security",
      "securityDefinitions",
      "@context"
    ],
    "additionalProperties": true
  }
var schema_v1 = {
    "title": "WoT TD Schema - 16 October 2019",
    "description": "JSON Schema for validating TD instances against the TD model. TD instances can be with or without terms that have default values",
    "$schema ": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "anyUri": {
            "type": "string",
            "format": "iri-reference"
        },
        "description": {
            "type": "string"
        },
        "descriptions": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "title": {
            "type": "string"
        },
        "titles": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "security": {
            "oneOf": [{
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                {
                    "type": "string"
                }
            ]
        },
        "scopes": {
            "oneOf": [{
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                {
                    "type": "string"
                }
            ]
        },
        "subProtocol": {
            "type": "string",
            "enum": [
                "longpoll",
                "websub",
                "sse"
            ]
        },
        "thing-context-w3c-uri": {
            "type": "string",
            "enum": [
                "https://www.w3.org/2019/wot/td/v1"
            ]
        },
        "thing-context": {
            "oneOf": [{
                    "type": "array",
                    "items": [{
                        "$ref": "#/definitions/thing-context-w3c-uri"
                    }],
                    "additionalItems": {
                        "anyOf": [{
                                "$ref": "#/definitions/anyUri"
                            },
                            {
                                "type": "object"
                            }
                        ]
                    }
                },
                {
                    "$ref": "#/definitions/thing-context-w3c-uri"
                }
            ]
        },
        "type_declaration": {
            "oneOf": [{
                    "type": "string"
                },
                {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            ]
        },
        "dataSchema": {
            "type": "object",
            "properties": {
                "@type": {
                    "$ref": "#/definitions/type_declaration"
                },
                "description": {
                    "$ref": "#/definitions/description"
                },
                "title": {
                    "$ref": "#/definitions/title"
                },
                "descriptions": {
                    "$ref": "#/definitions/descriptions"
                },
                "titles": {
                    "$ref": "#/definitions/titles"
                },
                "writeOnly": {
                    "type": "boolean"
                },
                "readOnly": {
                    "type": "boolean"
                },
                "oneOf": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "unit": {
                    "type": "string"
                },
                "enum": {
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true
                },
                "format": {
                    "type": "string"
                },
                "const": {},
                "type": {
                    "type": "string",
                    "enum": [
                        "boolean",
                        "integer",
                        "number",
                        "string",
                        "object",
                        "array",
                        "null"
                    ]
                },
                "items": {
                    "oneOf": [{
                            "$ref": "#/definitions/dataSchema"
                        },
                        {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/dataSchema"
                            }
                        }
                    ]
                },
                "maxItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "minItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "minimum": {
                    "type": "number"
                },
                "maximum": {
                    "type": "number"
                },
                "properties": {
                    "additionalProperties": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "required": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            }
        },
        "form_element_property": {
            "type": "object",
            "properties": {
                "op": {
                    "oneOf": [{
                            "type": "string",
                            "enum": [
                                "readproperty",
                                "writeproperty",
                                "observeproperty",
                                "unobserveproperty"
                            ]
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [
                                    "readproperty",
                                    "writeproperty",
                                    "observeproperty",
                                    "unobserveproperty"
                                ]
                            }
                        }
                    ]
                },
                "href": {
                    "$ref": "#/definitions/anyUri"
                },
                "contentType": {
                    "type": "string"
                },
                "contentCoding": {
                    "type": "string"
                },
                "subProtocol": {
                    "$ref": "#/definitions/subProtocol"
                },
                "security": {
                    "$ref": "#/definitions/security"
                },
                "scopes": {
                    "$ref": "#/definitions/scopes"
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "contentType": {
                            "type": "string"
                        }
                    }
                }
            },
            "required": [
                "href"
            ],
            "additionalProperties": true
        },
        "form_element_action": {
            "type": "object",
            "properties": {
                "op": {
                    "oneOf": [{
                            "type": "string",
                            "enum": [
                                "invokeaction"
                            ]
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [
                                    "invokeaction"
                                ]
                            }
                        }
                    ]
                },
                "href": {
                    "$ref": "#/definitions/anyUri"
                },
                "contentType": {
                    "type": "string"
                },
                "contentCoding": {
                    "type": "string"
                },
                "subProtocol": {
                    "$ref": "#/definitions/subProtocol"
                },
                "security": {
                    "$ref": "#/definitions/security"
                },
                "scopes": {
                    "$ref": "#/definitions/scopes"
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "contentType": {
                            "type": "string"
                        }
                    }
                }
            },
            "required": [
                "href"
            ],
            "additionalProperties": true
        },
        "form_element_event": {
            "type": "object",
            "properties": {
                "op": {
                    "oneOf": [{
                            "type": "string",
                            "enum": [
                                "subscribeevent",
                                "unsubscribeevent"
                            ]
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [
                                    "subscribeevent",
                                    "unsubscribeevent"
                                ]
                            }
                        }
                    ]
                },
                "href": {
                    "$ref": "#/definitions/anyUri"
                },
                "contentType": {
                    "type": "string"
                },
                "contentCoding": {
                    "type": "string"
                },
                "subProtocol": {
                    "$ref": "#/definitions/subProtocol"
                },
                "security": {
                    "$ref": "#/definitions/security"
                },
                "scopes": {
                    "$ref": "#/definitions/scopes"
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "contentType": {
                            "type": "string"
                        }
                    }
                }
            },
            "required": [
                "href"
            ],
            "additionalProperties": true
        },
        "form_element_root": {
            "type": "object",
            "properties": {
                "op": {
                    "oneOf": [{
                            "type": "string",
                            "enum": [
                                "readallproperties",
                                "writeallproperties",
                                "readmultipleproperties",
                                "writemultipleproperties"
                            ]
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [
                                    "readallproperties",
                                    "writeallproperties",
                                    "readmultipleproperties",
                                    "writemultipleproperties"
                                ]
                            }
                        }
                    ]
                },
                "href": {
                    "$ref": "#/definitions/anyUri"
                },
                "contentType": {
                    "type": "string"
                },
                "contentCoding": {
                    "type": "string"
                },
                "subProtocol": {
                    "$ref": "#/definitions/subProtocol"
                },
                "security": {
                    "$ref": "#/definitions/security"
                },
                "scopes": {
                    "$ref": "#/definitions/scopes"
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "contentType": {
                            "type": "string"
                        }
                    }
                }
            },
            "required": [
                "href"
            ],
            "additionalProperties": true
        },
        "property_element": {
            "type": "object",
            "properties": {
                "@type": {
                    "$ref": "#/definitions/type_declaration"
                },
                "description": {
                    "$ref": "#/definitions/description"
                },
                "descriptions": {
                    "$ref": "#/definitions/descriptions"
                },
                "title": {
                    "$ref": "#/definitions/title"
                },
                "titles": {
                    "$ref": "#/definitions/titles"
                },
                "forms": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "#/definitions/form_element_property"
                    }
                },
                "uriVariables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "observable": {
                    "type": "boolean"
                },
                "writeOnly": {
                    "type": "boolean"
                },
                "readOnly": {
                    "type": "boolean"
                },
                "oneOf": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "unit": {
                    "type": "string"
                },
                "enum": {
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true
                },
                "format": {
                    "type": "string"
                },
                "const": {},
                "type": {
                    "type": "string",
                    "enum": [
                        "boolean",
                        "integer",
                        "number",
                        "string",
                        "object",
                        "array",
                        "null"
                    ]
                },
                "items": {
                    "oneOf": [{
                            "$ref": "#/definitions/dataSchema"
                        },
                        {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/dataSchema"
                            }
                        }
                    ]
                },
                "maxItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "minItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "minimum": {
                    "type": "number"
                },
                "maximum": {
                    "type": "number"
                },
                "properties": {
                    "additionalProperties": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "required": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "forms"
            ],
            "additionalProperties": true
        },
        "action_element": {
            "type": "object",
            "properties": {
                "@type": {
                    "$ref": "#/definitions/type_declaration"
                },
                "description": {
                    "$ref": "#/definitions/description"
                },
                "descriptions": {
                    "$ref": "#/definitions/descriptions"
                },
                "title": {
                    "$ref": "#/definitions/title"
                },
                "titles": {
                    "$ref": "#/definitions/titles"
                },
                "forms": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "#/definitions/form_element_action"
                    }
                },
                "uriVariables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "input": {
                    "$ref": "#/definitions/dataSchema"
                },
                "output": {
                    "$ref": "#/definitions/dataSchema"
                },
                "safe": {
                    "type": "boolean"
                },
                "idempotent": {
                    "type": "boolean"
                }
            },
            "required": [
                "forms"
            ],
            "additionalProperties": true
        },
        "event_element": {
            "type": "object",
            "properties": {
                "@type": {
                    "$ref": "#/definitions/type_declaration"
                },
                "description": {
                    "$ref": "#/definitions/description"
                },
                "descriptions": {
                    "$ref": "#/definitions/descriptions"
                },
                "title": {
                    "$ref": "#/definitions/title"
                },
                "titles": {
                    "$ref": "#/definitions/titles"
                },
                "forms": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "#/definitions/form_element_event"
                    }
                },
                "uriVariables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/dataSchema"
                    }
                },
                "subscription": {
                    "$ref": "#/definitions/dataSchema"
                },
                "data": {
                    "$ref": "#/definitions/dataSchema"
                },
                "cancellation": {
                    "$ref": "#/definitions/dataSchema"
                }
            },
            "required": [
                "forms"
            ],
            "additionalProperties": true
        },
        "link_element": {
            "type": "object",
            "properties": {
                "href": {
                    "$ref": "#/definitions/anyUri"
                },
                "type": {
                    "type": "string"
                },
                "rel": {
                    "type": "string"
                },
                "anchor": {
                    "$ref": "#/definitions/anyUri"
                }
            },
            "required": [
                "href"
            ],
            "additionalProperties": true
        },
        "securityScheme": {
            "oneOf": [{
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "nosec"
                            ]
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "basic"
                            ]
                        },
                        "in": {
                            "type": "string",
                            "enum": [
                                "header",
                                "query",
                                "body",
                                "cookie"
                            ]
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "digest"
                            ]
                        },
                        "qop": {
                            "type": "string",
                            "enum": [
                                "auth",
                                "auth-int"
                            ]
                        },
                        "in": {
                            "type": "string",
                            "enum": [
                                "header",
                                "query",
                                "body",
                                "cookie"
                            ]
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "apikey"
                            ]
                        },
                        "in": {
                            "type": "string",
                            "enum": [
                                "header",
                                "query",
                                "body",
                                "cookie"
                            ]
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "bearer"
                            ]
                        },
                        "authorization": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "alg": {
                            "type": "string"
                        },
                        "format": {
                            "type": "string"
                        },
                        "in": {
                            "type": "string",
                            "enum": [
                                "header",
                                "query",
                                "body",
                                "cookie"
                            ]
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "psk"
                            ]
                        },
                        "identity": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "$ref": "#/definitions/type_declaration"
                        },
                        "description": {
                            "$ref": "#/definitions/description"
                        },
                        "descriptions": {
                            "$ref": "#/definitions/descriptions"
                        },
                        "proxy": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scheme": {
                            "type": "string",
                            "enum": [
                                "oauth2"
                            ]
                        },
                        "authorization": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "token": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "refresh": {
                            "$ref": "#/definitions/anyUri"
                        },
                        "scopes": {
                            "oneOf": [{
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        },
                        "flow": {
                            "type": "string",
                            "enum": [
                                "code"
                            ]
                        }
                    },
                    "required": [
                        "scheme"
                    ]
                }
            ]
        }
    },
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "format": "uri"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "titles": {
            "$ref": "#/definitions/titles"
        },
        "properties": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/property_element"
            }
        },
        "actions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/action_element"
            }
        },
        "events": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/event_element"
            }
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "descriptions": {
            "$ref": "#/definitions/descriptions"
        },
        "version": {
            "type": "object",
            "properties": {
                "instance": {
                    "type": "string"
                }
            },
            "required": [
                "instance"
            ]
        },
        "links": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/link_element"
            }
        },
        "forms": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/definitions/form_element_root"
            }
        },
        "base": {
            "$ref": "#/definitions/anyUri"
        },
        "securityDefinitions": {
            "type": "object",
            "minProperties": 1,
            "additionalProperties": {
                "$ref": "#/definitions/securityScheme"
            }
        },
        "support": {
            "$ref": "#/definitions/anyUri"
        },
        "created": {
            "type": "string",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "format": "date-time"
        },
        "security": {
            "oneOf": [{
                    "type": "string"
                },
                {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "type": "string"
                    }
                }
            ],

        },
        "@type": {
            "$ref": "#/definitions/type_declaration"
        },
        "@context": {
            "$ref": "#/definitions/thing-context"
        }
    },
    "required": [
        "title",
        "security",
        "securityDefinitions",
        "@context"
    ],
    "additionalProperties": true
}
var Dawn = {
  "base": "vs",
  "inherit": true,
  "rules": [
    {
      "background": "F9F9F9",
      "token": ""
    },
    {
      "foreground": "5a525f",
      "fontStyle": "italic",
      "token": "comment"
    },
    {
      "foreground": "811f24",
      "fontStyle": "bold",
      "token": "constant"
    },
    {
      "foreground": "bf4f24",
      "token": "entity"
    },
    {
      "foreground": "794938",
      "token": "keyword"
    },
    {
      "foreground": "a71d5d",
      "fontStyle": "italic",
      "token": "storage"
    },
    {
      "foreground": "0b6125",
      "token": "string | punctuation.definition.string"
    },
    {
      "foreground": "691c97",
      "token": "support"
    },
    {
      "foreground": "234a97",
      "token": "variable"
    },
    {
      "foreground": "794938",
      "token": "punctuation.separator"
    },
    {
      "foreground": "b52a1d",
      "fontStyle": "bold italic underline",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "f8f8f8",
      "background": "b52a1d",
      "fontStyle": "italic underline",
      "token": "invalid.illegal"
    },
    {
      "foreground": "080808",
      "background": "6f8bba26",
      "token": "string source"
    },
    {
      "foreground": "696969",
      "fontStyle": "bold",
      "token": "string constant"
    },
    {
      "foreground": "234a97",
      "token": "string variable"
    },
    {
      "foreground": "cf5628",
      "token": "string.regexp"
    },
    {
      "foreground": "cf5628",
      "fontStyle": "bold italic",
      "token": "string.regexp.character-class"
    },
    {
      "foreground": "cf5628",
      "fontStyle": "bold italic",
      "token": "string.regexp constant.character.escaped"
    },
    {
      "foreground": "cf5628",
      "fontStyle": "bold italic",
      "token": "string.regexp source.ruby.embedded"
    },
    {
      "foreground": "cf5628",
      "fontStyle": "bold italic",
      "token": "string.regexp string.regexp.arbitrary-repitition"
    },
    {
      "foreground": "811f24",
      "fontStyle": "bold",
      "token": "string.regexp constant.character.escape"
    },
    {
      "background": "6f8bba26",
      "token": "text source"
    },
    {
      "foreground": "693a17",
      "token": "support.function"
    },
    {
      "foreground": "b4371f",
      "token": "support.constant"
    },
    {
      "foreground": "234a97",
      "token": "support.variable"
    },
    {
      "foreground": "693a17",
      "token": "markup.list"
    },
    {
      "foreground": "19356d",
      "fontStyle": "bold",
      "token": "markup.heading | markup.heading entity.name"
    },
    {
      "foreground": "0b6125",
      "background": "bbbbbb30",
      "fontStyle": "italic",
      "token": "markup.quote"
    },
    {
      "foreground": "080808",
      "fontStyle": "italic",
      "token": "markup.italic"
    },
    {
      "foreground": "080808",
      "fontStyle": "bold",
      "token": "markup.bold"
    },
    {
      "foreground": "080808",
      "fontStyle": "underline",
      "token": "markup.underline"
    },
    {
      "foreground": "234a97",
      "fontStyle": "italic underline",
      "token": "markup.link"
    },
    {
      "foreground": "234a97",
      "background": "bbbbbb30",
      "token": "markup.raw"
    },
    {
      "foreground": "b52a1d",
      "token": "markup.deleted"
    },
    {
      "foreground": "19356d",
      "background": "dcdcdc",
      "fontStyle": "bold",
      "token": "meta.separator"
    }
  ],
  "colors": {
    "editor.foreground": "#ffffff",
    "editor.background": "#ffffff",
    "editor.selectionBackground": "#275FFF4D",
    "editor.lineHighlightBackground": "#2463B41F",
    "editorCursor.foreground": "#000000",
    "editorWhitespace.foreground": "#4B4B7E80"
  }
}

var Dracula = {
  "base": "vs-dark",
  "inherit": true,
  "rules": [
    {
      "background": "282a36",
      "token": ""
    },
    {
      "foreground": "6272a4",
      "token": "comment"
    },
    {
      "foreground": "f1fa8c",
      "token": "string"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.numeric"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.language"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.character"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.other"
    },
    {
      "foreground": "ffb86c",
      "token": "variable.other.readwrite.instance"
    },
    {
      "foreground": "ff79c6",
      "token": "constant.character.escaped"
    },
    {
      "foreground": "ff79c6",
      "token": "constant.character.escape"
    },
    {
      "foreground": "ff79c6",
      "token": "string source"
    },
    {
      "foreground": "ff79c6",
      "token": "string source.ruby"
    },
    {
      "foreground": "ff79c6",
      "token": "keyword"
    },
    {
      "foreground": "ff79c6",
      "token": "storage"
    },
    {
      "foreground": "8be9fd",
      "fontStyle": "italic",
      "token": "storage.type"
    },
    {
      "foreground": "50fa7b",
      "fontStyle": "underline",
      "token": "entity.name.class"
    },
    {
      "foreground": "50fa7b",
      "fontStyle": "italic underline",
      "token": "entity.other.inherited-class"
    },
    {
      "foreground": "50fa7b",
      "token": "entity.name.function"
    },
    {
      "foreground": "ffb86c",
      "fontStyle": "italic",
      "token": "variable.parameter"
    },
    {
      "foreground": "ff79c6",
      "token": "entity.name.tag"
    },
    {
      "foreground": "50fa7b",
      "token": "entity.other.attribute-name"
    },
    {
      "foreground": "8be9fd",
      "token": "support.function"
    },
    {
      "foreground": "6be5fd",
      "token": "support.constant"
    },
    {
      "foreground": "66d9ef",
      "fontStyle": " italic",
      "token": "support.type"
    },
    {
      "foreground": "66d9ef",
      "fontStyle": " italic",
      "token": "support.class"
    },
    {
      "foreground": "f8f8f0",
      "background": "ff79c6",
      "token": "invalid"
    },
    {
      "foreground": "f8f8f0",
      "background": "bd93f9",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "cfcfc2",
      "token": "meta.structure.dictionary.json string.quoted.double.json"
    },
    {
      "foreground": "6272a4",
      "token": "meta.diff"
    },
    {
      "foreground": "6272a4",
      "token": "meta.diff.header"
    },
    {
      "foreground": "ff79c6",
      "token": "markup.deleted"
    },
    {
      "foreground": "50fa7b",
      "token": "markup.inserted"
    },
    {
      "foreground": "e6db74",
      "token": "markup.changed"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.numeric.line-number.find-in-files - match"
    },
    {
      "foreground": "e6db74",
      "token": "entity.name.filename"
    },
    {
      "foreground": "f83333",
      "token": "message.error"
    },
    {
      "foreground": "eeeeee",
      "token": "punctuation.definition.string.begin.json - meta.structure.dictionary.value.json"
    },
    {
      "foreground": "eeeeee",
      "token": "punctuation.definition.string.end.json - meta.structure.dictionary.value.json"
    },
    {
      "foreground": "8be9fd",
      "token": "meta.structure.dictionary.json string.quoted.double.json"
    },
    {
      "foreground": "f1fa8c",
      "token": "meta.structure.dictionary.value.json string.quoted.double.json"
    },
    {
      "foreground": "50fa7b",
      "token": "meta meta meta meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "ffb86c",
      "token": "meta meta meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "ff79c6",
      "token": "meta meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "bd93f9",
      "token": "meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "50fa7b",
      "token": "meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "ffb86c",
      "token": "meta meta.structure.dictionary.value string"
    }
  ],
  "colors": {
    "editor.foreground": "#f8f8f2",
    "editor.background": "#45455C",
    "editor.selectionBackground": "#44535a",
    "editor.lineHighlightBackground": "#44475a",
    "editorCursor.foreground": "#f8f8f0",
    "editorWhitespace.foreground": "#44535a",
    "editorIndentGuide.activeBackground": "#9D550FB0",
    "editor.selectionHighlightBorder": "#222218"
  }
}