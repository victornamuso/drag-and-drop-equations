import Ember from "ember";
//import {  } from 'ember-computed-decorators';

const plusOperator = {type: "math", value: "+", displayValue: "+"};
const minusOperator = {type: "math", value: "-", displayValue: "-"};
const multiplyOperator = {type: "math", value: "*", displayValue: "*"};
const divisionOperator = {type: "math", value: "/", displayValue: "/"};
const mathOperators = [plusOperator,minusOperator,multiplyOperator,divisionOperator];

const linearInchesField = {displayValue: "Linear Inches", type: "variable", value: "linearInches"};
const wasteField = {displayValue: "Waste", type: "variable", value: "waste"};

const variableOperators = [linearInchesField,wasteField];

const {get,Controller} = Ember;

export default Controller.extend({
  mathOperators,
  variableOperators,
  fields: Ember.A(),
  result: null,
  buildEquation(){
    let fields = this.get("fields");
    let result = fields.map(item => {
      let itemType = item.type;
      let value = item.value;
      return itemType === "math" ? value : this.get(`${value}Value`);
    });
    return result.join(" ");
  },
  calculate(){
    let equation = this.buildEquation();
    try{
      let result = math.eval(equation);
      this.set("result", result);
    }
    catch(e){
    }
  },
  actions:{
    dragStop(e){
    },
    addField(field){
      let fields = get(this,"fields");
      if(fields.length && fields.get("lastObject").type === field.type){
	alert("Invalid operator");
	return;
      }
      this.get("fields").pushObject(field);
      this.calculate();
    },
    calculate(){
      this.calculate();
    },
  }
});
