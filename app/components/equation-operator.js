import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",

  operatorClasses: Ember.computed("operator.type",function(){
    let classes = "label";
    let operatorType = this.get("operator.type");
    let decoratorClass = "";

    switch(operatorType) {
      case "math":
	decoratorClass = "info";
	break;
      case "variable": 
	decoratorClass = "primary";
	break;
    }

    classes += ` label-${decoratorClass}`;
    return classes;
  }),
  actions:{
    dragStop(e){
      this.attrs.onDragStop(e);
    }
  }
});
