/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/20
 * @version: v1.0
 */
module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    }
}