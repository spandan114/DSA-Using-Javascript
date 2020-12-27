// A LIFO data structure!
// The last element added to the stack will be the first element removed from the stack
// Think about a stack of plates, or a stack of markers, or a stack of....anything.
// As you pile it up the last thing (or the topmost thing) is what gets removed first.

// WHERE STACKS ARE USED

// Managing function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack!

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// Insertion -   O(1)
// Removal -   O(1)
// Searching -   O(N)
// Access -   O(N)