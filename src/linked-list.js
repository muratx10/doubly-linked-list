const Node = require('./node');
class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length === 0) {
            this._tail = node;
            this._head = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let actualNode = this._head;

        for (let i = 0; i < index; i++) {
            actualNode = actualNode.next;
        }
        return actualNode.data;
    }

    insertAt(index, data) {
        let actualNode = this._head;
        let node = new Node(data);
        
        //here we chaining new node with index+1 node
        let counter = 0;
        while (counter <= index) {
            if (counter === index) {
                actualNode.prev = node;
                node.next = actualNode;
            } else {
                actualNode = actualNode.next;
            }  
            counter++;
        }

        //here we chaining new node with index-1 node
        let actualNode2 = this._head;
        counter = 0;
        while (counter < index) {
            if (counter === index - 1) {
                actualNode2.next = node;
                node.prev = actualNode2;
            } else {
                actualNode2 = actualNode2.next;
            }  
            counter++;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        return (!this.length ? true : false);
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let actualNode = this._head;

        for (let i = 0; i <= index; i++) {
            actualNode = actualNode.next;
        };

        let actualNode2 = this._head;
        for (let i = 0; i < index; i++) {
            if (i === index - 1) {
                actualNode2.next = actualNode;
                actualNode.prev = actualNode2;
            } else {
                actualNode2 = actualNode2.next;
            };
        };
        this.length--;
        return this;

    }

    reverse() {
        let actualNode = this._head;
        let tempArr = [];
        for (let i = 0; i < this.length; i++) {
            tempArr.push(actualNode.data);
            actualNode = actualNode.next;
        }
        tempArr.reverse();
        this.clear();
        tempArr.forEach(item => this.append(item));
        return this;
    }

    indexOf(data) {
        let actualNode = this._head;
        let indexOf = '';
        let i = '';
        for (i = 0; i < this.length; i++) {
            if (actualNode.data === data) {
                indexOf = i;
                break;
            };
            actualNode = actualNode.next;
        };
        if (indexOf === i) {
            return +indexOf;
        } else {
            return Number('-1');
        }
    }
}

module.exports = LinkedList;