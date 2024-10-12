import { PetriNet } from "./Petri_Net.js";
export default class Arc {
    constructor(name, weight, type, direction,place,trans) {
        this.name = name || "Arc" + (PetriNet.nb_arc);
        this.weight = weight || 1;
        this.Inhibitor = type || false;
        this.Place = place; 
        this.Transition = trans;
        this.placeToTransition = direction || true;
        this.id_arc = 1;
    }
    getName (){
        return this.name;
    }
  
    setName(name) {
        this.name = name;
    }
  
    getWeight() {
        return this.weight;
    }
  
    setWeight(weight) {
        this.weight = weight;
    }
  
    isInhibitor() {
        return this.Inhibitor;
    }
    
    getTransition() {
        return this.Transition;
    }
    
    setPlace(source) {
        this.Place = source;
    }
    
    getPlace() {
        return this.Place;
    }
    
    setTransition(destination) {
        this.Transition = destination;
    }
  
    isPlaceToTransition() {
        return this.placeToTransition;
    }
    
    setPlaceToTransition(placeToTransition) {
        this.placeToTransition = placeToTransition;
    }}