class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }
  //1
  append(value) {
    let ListNode = this.head;
    if (ListNode === null) {
      this.head = value;
      this.length++;
      return;
    }
    while (ListNode.next) {
      ListNode = ListNode.next;
    }
    ListNode.next = value;
    this.length++;
  }
  //2
  prepend(value) {
    let ListNode = this.head;
    if (ListNode === null) {
      this.head = value;
      this.length++;
      return;
    }
    value.next = this.head;
    this.head = value;
    this.length++;
  }
  //3
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  //4
  showHead() {
    let ListNode = this.head;
    if (ListNode === null) {
      return 'Empty';
    }
    return ListNode;
  }
  //5
  showTail() {
    let ListNode = this.head;
    if (ListNode === null) {
      return 'Empty';
    }
    while (ListNode.next) {
      ListNode = ListNode.next;
    }
    return ListNode;
  }
  //6
  at(index) {
    let ListNode = this.head;
    if (index === 0) {
      return ListNode;
    }
    while (index--) {
      if (ListNode.next) {
        ListNode = ListNode.next;
      } else throw Error('No such entry');
    }
    return ListNode;
  }
  //7
  pop() {
    let ListNode = this.head;
    let secondLast = this.head;
    if (ListNode === null) {
      return 'Empty';
    }
    while (ListNode.next) {
      secondLast = ListNode;
      ListNode = ListNode.next;
    }
    secondLast.next = null;
    return secondLast;
  }
  //8
  contains(value) {
    let ListNode = this.head;
    if (ListNode === null) {
      return 'Empty';
    } else if (ListNode.data === value) {
      return true;
    }
    while (ListNode) {
      if (ListNode.data === value) {
        return true;
      }
      ListNode = ListNode.next;
    }
    return false;
  }
  //9
  find(value) {
    let ListNode = this.head;
    let count = 0;
    if (ListNode === null) {
      return 'Empty';
    } else if (ListNode.data === value) {
      return count;
    }
    while (ListNode) {
      if (ListNode.data === value) {
        return count;
      }
      ListNode = ListNode.next;
      count++;
    }
    return null;
  }
  //10
  toString() {
    let string = ``;
    let ListNode = this.head;
    if (ListNode === null) {
      return 'Empty';
    }
    while (ListNode) {
      if (this.head === ListNode) {
        string += `${ListNode.data}`;
      } else if (ListNode.next === null) {
        string += ` -> ${ListNode.data}`;
      } else {
        string += ` -> ${ListNode.data}`;
      }
      ListNode = ListNode.next;
    }
    return string;
  }
  //11
  insertAt(value, index) {
    let ListNode = this.head;
    let count = 0;
    let previousNode = this.head;

    if (index > this.length - 1) {
      return 'Index too large';
    }

    while (ListNode) {
      if (count === index) {
        if (index === 0) {
          value.next = ListNode;
          this.head = value;
          this.length++;
          return list;
        } else {
          previousNode.next = value;
          value.next = ListNode;
          this.length++;
          return list;
        }
      }
      count++;
      previousNode = ListNode;
      ListNode = ListNode.next;
    }
  }
  //12
  removeAt(index) {
    let ListNode = this.head;
    let count = 0;
    let previousNode = this.head;

    if (index > this.length - 1) {
      return 'Index too large';
    }

    while (ListNode) {
      if (count === index) {
        if (index === 0) {
          this.head = ListNode.next;
          ListNode.next = null;
          this.length--;
          return list;
        } else {
          previousNode.next = previousNode.next.next;
          ListNode.next = null;
          this.length--;
          return list;
        }
      }
      count++;
      previousNode = ListNode;
      ListNode = ListNode.next;
    }
  }
}

let list = new LinkedList();
console.log(list);

list.prepend(new ListNode(5));
list.prepend(new ListNode(2));
list.prepend(new ListNode('f'));
list.prepend(new ListNode(99));

console.log(list);
