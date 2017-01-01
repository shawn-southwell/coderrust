function Node(val){
	this.val = val;
	this.next = null;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function nthFromlast(ll,n){
  let currHead = ll;
  let nthPointer = ll;
  let counter = 0;
  while(nthPointer.next){
    if (counter >= n){
      currHead = currHead.next;
    }
    counter++;
    nthPointer = nthPointer.next;
  }
  return currHead.val;
}	

nthFromlast(a,2)
