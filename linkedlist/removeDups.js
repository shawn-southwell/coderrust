function Node(val){
  this.val = val;
  this.next = null;
}

const a = new Node(7);
const b = new Node(14);
const c = new Node(28);
const d = new Node(28);
const e = new Node(14);
const f = new Node(21);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function noDupz(ll){
  const lolvariablez = new Set();
  let currNode = ll;
  let prev;
  while(currNode){
    if (!lolvariablez.has(currNode.val)) {
      lolvariablez.add(currNode.val);
      prev = currNode;
      currNode = currNode.next
      } else {
        currNode = prev.next = currNode.next;
    }
  }
  return JSON.stringify(ll);
}
//their solution
function noDupz2(ll){
  const store = new Set();
  store.add(ll.val)
  let currNode = ll;
  while(currNode.next){
    if (store.has(currNode.next.val)){
      console.log('del')
      currNode.next = currNode.next.next;
    } else {
      console.log('adding', currNode.val)
      store.add(currNode.next.val);
      currNode = currNode.next;
    }
  }
  return JSON.stringify(ll);
}
//console.log(JSON.stringify(a))
noDupz2(a)
