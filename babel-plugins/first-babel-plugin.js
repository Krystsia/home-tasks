module.exports = function(babel) {
    return {
        visitor: {
            FunctionDeclaration(path) {
                var  traversingInner =  {
                    ExpressionStatement(path) {
                        var right = path.get('right');
                        path.node.expression.right.value = 'none';
                      
                    }
                }
                
                
                
                if(path.node.id.name === 'hideLoader') {
                    path.traverse(traversingInner);
                } 
            }
        }
    }
}