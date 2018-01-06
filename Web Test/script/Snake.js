/**
 * Created by Xujian on 2017/11/12.
 */

(function () {
    function SnakeNode(width, height, color, top, left) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || 'green';
        this.top = top || 0;
        this.left = left || 0;
        this.element = null;
    }
    SnakeNode.prototype.display = function (map) {
        if(this.element){
            var node = this.element;
            map = map || this.element.parentNode;
        }else{
            var node = document.createElement('div');
            this.element = node;
        }
        node.style.position = 'absolute';
        node.style.width = this.width + 'px';
        node.style.height = this.height + 'px';
        node.style.backgroundColor = this.color;
        node.style.top = this.top * this.height + 'px';
        node.style.left = this.left * this.width + 'px';
        map.appendChild(node);
    }
    SnakeNode.prototype.remove = function () {
        if(this.element && this.element.parentNode){
            this.element.parentNode.removeChild(this.element);
            this.element = null;
        }else{
            alert('Node does not display!');
        }
    }

    var snake = [];
    snake.initial = function (length, map, direction, nodeWidth, nodeHeight, nodeColor) {
        nodeWidth = nodeWidth || 20;
        nodeHeight = nodeHeight || 20;
        nodeColor = nodeColor || 'green';
        this.direction = direction || 'none';
        this.oldDirection = direction || 'none';
        for(var index = 0; index < this.length ; index++){
            this[index].remove();
        }
        this.length = 0;
        for(var index = 0; index < length ; index++){
            var node = new SnakeNode(nodeWidth, nodeHeight, nodeColor, 0, index);
            node.display(map);
            this.unshift(node);
        }
        this[0].element.style.backgroundColor = 'black';
    }
    snake.moveOneStep = function () {
        var width = this[0].width;
        var height = this[0].height;
        var color = this[0].color;
        var top = this[0].top;
        var left = this[0].left;
        switch(this.direction){
            case 'up':
                top--;
                break;
            case 'down':
                top++;
                break;
            case 'left':
                left--;
                break;
            case 'right':
                left++;
                break;
            default:
                alert("Don't have a valid direction!");
                return;
        }
        this[0].display();
        var newHead = new SnakeNode(width, height, color, top, left);
        newHead.display(this[0].element.parentNode);
        this.unshift(newHead);
        this[0].element.style.backgroundColor = 'black';
        this[this.length - 1].remove();
        this.dropNode = this.pop();
        this.oldDirection = this.direction;
    }
    snake.growOneNode = function () {
        if(this.dropNode){
            this.dropNode.display(this[0].element.parentNode);
            this.push(this.dropNode);
            this.dropNode = null;
        }else{
            alert('Can not grow!');
        }
    }
    snake.isEattingSelf = function () {
        for(var index = 1; index < this.length ; index++){
            if(this[index].top == this[0].top && this[index].left == this[0].left){
                return true;
            }
        }
        return false;
    }
    snake.isHeadOverBound = function () {
        var maxTop = this[0].element.parentNode.clientHeight / this[0].height - 1;
        var maxLeft = this[0].element.parentNode.clientWidth / this[0].width - 1;
        if(this[0].top < 0 || this[0].top > maxTop){
            return true;
        }
        if(this[0].left < 0 || this[0].left > maxLeft){
            return true;
        }
        return false;
    }

    window.snake = snake;
})();