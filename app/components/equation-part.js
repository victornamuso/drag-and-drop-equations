import Ember from 'ember';

const {set,get,Component} = Ember;
export default Component.extend({
  tagName: "",
  classes: Ember.computed("isOver","field.type",function(){
    let field = get(this,"field");
    let classes = `equation-part-${field.type}`;
    // if(get(this,"isOver"))
    //   classes += " equation-part
    return classes;
  }),
  actions:{
    swapField(field){
      if(field.type === get(this,"field").type)
	set(this,"field",field);
    },
    dragOver(){
      set(this,"isOver",true);
    },
    dragOut(){
      set(this,"isOver",false);
    },
  }
});
