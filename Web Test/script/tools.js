/**
 * 兼容 事件对象获取
 */
(function (event) {
    event = event || window.event;
})

/**
 * 兼容
 */




/**
 *
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    };
}