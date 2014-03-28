
/* Atomic Rule constructor will store the math relation to apply the rules */
var AtomicRule = function(specs){
	/*
	specs = {
		kernel,
		kernelCellNumber,
		kernelComparationType,
		comparedCell,
		newCell,
	}
	*/

	this.kernel 				  = specs.kernel;					// Rule's neighbourhood test
	this.kernelCellNumber 		  = specs.kernelCellNumber;			// Number of cells in the neighbourhood to test
	this.kernelComparationType    = specs.kernelComparationType;	// Type of comparation e.g: lessThen, equals, moreThenEquals, etc.
	this.comparedCell			  = specs.comparedCell;				// Cell to compare to
	this.newCell 				  = specs.newCell;					// Cell to transform
}
/* Apply the math relation stored in the coordinates of the layers given by the Automaton */
AtomicRule.prototype.apply = function(){
	/* 
	Return information stored. THIS FUNCTION MAKES NO SENSE.
	*/
	return this;
}



/*
Cell:
	Origin layer;
	RulesToApply[];
*/

var Automaton = function(){
	var cells = [];
	
	var addCellState = function(cellName){
		cells[cellName] = {
			
		}
	}
	
	var newAtomicRule = function(specs){
		
	}
	
	var iterator = function(){
		FOR EACH CELL IN LAYER
			
	}
}