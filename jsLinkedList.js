var LinkedNode = function(element){
  this.element = element;
  this.next = null;
};
LinkedNode.prototype.setNext = function(Node){
  this.next = Node;
};
LinkedNode.prototype.getNext = function(){
  return this.next;
};
LinkedNode.prototype.value = function(){
  return this.element;
};
LinkedNode.prototype.isLastNode = function(){
  return this.next === null;
};



var LinkedList = function(){
  this.headNode = null;
  this.lastNode = null;
};

LinkedList.prototype.add = function(element){
  var x = new LinkedNode(element);
  if(this.isEmpty()){
    this.headNode = x;
  }else{
    this.lastNode.setNext(x);
  }
  this.lastNode = x;
};

LinkedList.prototype.print = function(element){
  var a = [];
  this.map(function(node){
    a.push(node.value());
  });
  console.log(a);
};

LinkedList.prototype.map = function(callback){
  var tmp = this.headNode;
  if(tmp !== null){
    while(tmp !== null){
      callback(tmp);
      tmp = tmp.getNext();
    }
  }
};
LinkedList.prototype.find = function(element){
  var tmp ;
  this.map(function(node){
    if(node.value() === element){
      tmp = node;
    }
  });
  return tmp;
};
LinkedList.prototype.insertAfter = function(element, after){
  var node = this.find(after);
  var x = new LinkedNode(element);
  x.setNext(node.getNext());
  node.setNext(x);
  if(this.lastNode === node){
    this.lastNode = x;
  }
};

LinkedList.prototype.getParentNode = function(element){
  var tmp;
  if(this.headNode.value() === element){
    tmp = 0;
  }else{
    this.map(function(node){
      if(node.getNext() !== null &&
        node.getNext().value() === element){
        tmp = node;
      }
    });
  }
  //return 0 = element provided is headNode
  //return undefined = element not found
  //return node = actual node found
  return tmp;
};
LinkedList.prototype.isEmpty = function(){
  return this.headNode === null;
}
LinkedList.prototype.remove = function(element){
  if(this.isEmpty()){
    return ;
  }
  var node = this.getParentNode(element);
  if(node === 0){
    this.headNode = this.headNode.getNext();
    if(this.headNode === null){
      this.lastNode = null;
    }
    return;
  }
  if(node !== undefined){
    var nodeToRemove = this.find(element);
    node.setNext(nodeToRemove.getNext());
    if(node.isLastNode()){
      this.lastNode = node;
    }
  }
};
var l = new LinkedList();
l.print();
l.add("Apple");
l.add("Papita");
l.print();
l.insertAfter("Anar", "Papita");
l.print();
console.log(l);
l.remove("Papita");
console.log(l);
l.remove("Anar");
console.log(l);
l.remove("Apple");
console.log(l);
l.print();
l.add("Apple");
l.add("Papita");
l.print();




