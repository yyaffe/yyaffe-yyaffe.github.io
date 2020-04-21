var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
    return {
  "variables": [
    {
      "name": "tag",
      "label": "Tag",
      "field_type": "string",
      "options": []
    },
    {
      "name": "region",
      "label": "Region",
      "field_type": "select",
      "options": [
        "us-west-1",
        "eu-west-1"
      ]
    },
    {
      "name": "vpc",
      "label": "VPC",
      "field_type": "string",
      "options": []
    },
    {
      "name": "subnet",
      "label": "Subnet",
      "field_type": "string",
      "options": []
    }
  ],
  "actions": [
    {
      "name": "get_rule_resulting_information",
      "label": "get_rule_resulting_information",
      "params":
        {
          "rule_id": "numeric"
        }
    }
  ],
  "variable_type_operators": {
    "numeric": [
      {
        "name": "equal_to",
        "label": "Equal To",
        "input_type": "numeric"
      },
      {
        "name": "less_than",
        "label": "Less Than",
        "input_type": "numeric"
      },
      {
        "name": "greater_than",
        "label": "Greater Than",
        "input_type": "numeric"
      }
    ],
    "string": [
      {
        "name": "equal_to",
        "label": "Equal To",
        "input_type": "text"
      },
      {
        "name": "non_empty",
        "label": "Non Empty",
        "input_type": "none"
      }
    ],
    "select": [
      {
        "name": "contains",
        "label": "Contains",
        "input_type": "select"
      },
      {
        "name": "does_not_contain",
        "label": "Does Not Contain",
        "input_type": "select"
      }
    ]
  }
};
  };

  function onReady() {
    conditions = $("#conditions");
    actions = $("#actions");
    nameField = $("#nameField");
    occupationField = $("#occupationField");
    ageField = $("#ageField");
    submit = $("#submit");
    allData = getInitialData();

    initializeConditions(allData);
    initializeActions(allData);
    initializeForm();
  }

  function initializeConditions(data) {
    conditions.conditionsBuilder(data)
  }

  function initializeActions(data) {
    actions.actionsBuilder(data);
  }

  function initializeForm() {
    for(var i=0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {value: o.name, text: o.label}));
    }

    submit.click(function(e) {
      e.preventDefault();
      console.log("CONDITIONS");
      console.log(JSON.stringify(conditions.conditionsBuilder("data")));
      console.log("ACTIONS");
      console.log(JSON.stringify(actions.actionsBuilder("data")));
    });
  }
  $(onReady);
})(jQuery);
