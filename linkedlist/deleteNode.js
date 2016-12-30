function Node(val){
  this.val = val;
  this.next = null;
}

const a = new Node(7);
const b = new Node(14);
const c = new Node(21);
const d = new Node(28);
const e = new Node(35);
const f = new Node(42);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function delTarg(ll,key){
  let currNode = ll;
  if (currNode.val === key) return JSON.stringify(currNode.next);
  while(currNode.next){
    if (currNode.next.val === key){
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return JSON.stringify(ll);
}

delTarg(a,7)
