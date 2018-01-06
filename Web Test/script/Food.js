/**
 * Created by Xujian on 2017/11/12.
 */

(function () {
    function Food(width, height, color, top, left) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || 'green';
        this.top = top || 0;
        this.left = left || 0;
        this.element = null;
    }
    Food.prototype.display = function (map) {
        if(this.element && this.element.parentNode){
            alert('Food have displayed!');
            return;
        }
        var food = document.createElement('div');
        food.style.position = 'absolute';
        food.style.width = this.width + 'px';
        food.style.height = this.height + 'px';
        food.style.backgroundColor = this.color;
        food.style.top = this.top * this.height + 'px';
        food.style.left = this.left * this.width + 'px';

        map.appendChild(food);
        this.element = food;
    }
    Food.prototype.remove = function () {
        if(this.element && this.element.parentNode){
            this.element.parentNode.removeChild(this.element);
            this.element = null;
        }else{
            alert('Food does not display!');
        }
    }
    
    var foods = [];
    foods.initial = function (num, map, width, height, color) {
        width = width || 20;
        height = height || 20;
        color = color || 'green';
        for(var index = 0; index < this.length ; index++){
            this[index].remove();
        }
        this.length = 0;
        for(var index = 0; index < num ; index++){
            var top = getRandom_LBRB(0, map.clientHeight / height - 1);
            var left = getRandom_LBRB(0, map.clientWidth / width - 1);
            var occupy = false;
            for(var index_scearch = 0 ; index_scearch < this.length ; index_scearch++){
                if(this[index_scearch].top == top && this[index_scearch].left == left){
                    occupy = true;
                    break;
                }
            }
            if(occupy == true){
                index--;
                continue;
            }
            var food = new Food(width, height, color, top, left);
            food.display(map);
            this.push(food);
        }
    }
    foods.beEatten = function (eater) {
        for(var index_scearch = 0 ; index_scearch < this.length ; index_scearch++){
            var element = this[index_scearch].element;
            var heightContain = element.offsetTop <= eater.offsetTop && (element.offsetTop + element.offsetHeight) >= (eater.offsetTop + eater.offsetHeight);
            var widthContain = element.offsetLeft <= eater.offsetLeft && (element.offsetLeft + element.offsetWidth) >= (eater.offsetLeft + eater.offsetWidth);

            if(heightContain && widthContain){
                this[index_scearch].remove();
                this.splice(index_scearch, 1);
                return true;
            }
        }
        return false;
    }
    foods.addNewFood = function (num, map, width, height, color) {
        width = width || 20;
        height = height || 20;
        color = color || 'green';
        for(var index = 0; index < num ; index++){
            var top = getRandom_LBRB(0, map.clientHeight / height - 1);
            var left = getRandom_LBRB(0, map.clientWidth / width - 1);
            var occupy = false;
            for(var index_scearch = 0 ; index_scearch < this.length ; index_scearch++){
                if(this[index_scearch].top == top && this[index_scearch].left == left){
                    occupy = true;
                    break;
                }
            }
            if(occupy == true){
                index--;
                continue;
            }
            var food = new Food(width, height, color, top, left);
            food.display(map);
            this.push(food);
        }
    }
    window.foods = foods;
})();

function getRandom_LBRB(min,max){
    if(min > max){
        var exchange = min;
        min = max;
        max = exchange;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    if(min > max){
        return NaN;
    }
    return parseInt(Math.random() * (max - min + 1)) + min;
}