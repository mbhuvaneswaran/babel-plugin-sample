module.exports = function(babel){
  var t = babel.types;
  return {
    visitor: {
      ExpressionStatement : function(path){
        if(path.node.expression && path.node.expression.type === 'CallExpression' && path.node.expression.callee.object && path.node.expression.callee.object.name === 'console'){
        	path.remove();
        }
      }
    }
  }
}
