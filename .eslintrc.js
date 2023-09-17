module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended',],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue',],
  rules: {
    'no-debugger': 1, // 禁止debug
    'no-console': 1, //   禁止console
    // "no-redeclare": "2", // 禁止多次声明同一变量
    'no-bitwise': 'off',
    'no-tabs': 'off',
    'array-element-newline': ['error', 'consistent',],
    indent: [
      1,
      2,
      { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral',], },
    ],
    quotes: [1, 'single',],
    'spaced-comment': [1, 'always',], // 注释后加空格
    'comma-dangle': [
      1,
      {
        arrays: 'always', // 数组设置
        objects: 'always', // 对象设置
        imports: 'never', // 引入设置 如import{a,}
        exports: 'never', // export设置 export {a,}
        functions: 'never', // 函数设置 function (a,)
      },
    ], // 末尾加逗号 never always always-multiline-对象不同行时加,同行禁止 only-multiline-当在 同一行时，禁止使用拖尾逗号。
    'object-curly-spacing': ['error', 'always',], //	强制在大括号中使用一致的空格
    'no-multi-spaces': 1, // 禁止多个空格
    'max-len': [1, { code: 120, ignoreTrailingComments: true, },], // 最大长度120
    'max-depth': [2, 4,], // 最大深度
    'no-new': 'off', // 禁止使用 new
    'linebreak-style': 'off', // 强制使用一致的换行风格
    'import/extensions': 'off', // 暂时不清楚
    'eol-last': [1, 'always',], // 要求或禁止文件末尾存在空行 "always" (默认) 强制使用换行 "never" 强制文件末尾不要有换行符
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'no-unused-vars': 'warn', // 禁止出现未使用过的变量
    'import/no-cycle': 'off', // 暂时不清楚
    'arrow-parens': [1, 'as-needed',], //	要求箭头函数的参数使用圆括号 always  as-needed在可以省略括号的地方强制不使用括号
    semi: [2, 'always',], // 要求或禁止使用分号代替 ASI
    eqeqeq: 1, // 全等
    'no-param-reassign': 1, // 禁止对 function 的参数进行重新赋值
    'import/prefer-default-export': 'off', // 暂时不清楚
    'no-use-before-define': 2, // 禁止在变量定义之前使用它们
    'no-continue': 'off', // 禁止continue
    'prefer-destructuring': 'off', // 优先使用数组和对象解构
    'no-plusplus': 'off', // 禁用一元操作符 ++ 和 --
    'prefer-const': 1, // 要求使用 const 声明那些声明后不再被修改的变量 any-默认 all-
    'global-require': 'off', // 要求 require() 出现在顶层模块作用域中
    'no-prototype-builtins': 'off', // 禁止直接调用 Object.prototypes 的内置属性
    'consistent-return': 'off', // 要求 return 语句要么总是指定返回的值，要么不指定
    'vue/require-component-is': 'off', // 暂时不清楚
    'prefer-template': 'off', // 要求使用模板字面量而非字符串连接
    'one-var-declaration-per-line': 'off', // 要求或禁止在变量声明周围换行
    'one-var': 'off', // 强制函数中的变量要么一起声明要么分开声明
    'import/named': 'off', // 暂时不清楚
    'object-curly-newline': 'off', // 强制大括号内换行符的一致性
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'dot-location': 1, // "object" (默认)，表达式中的点号操作符应该和对象部分在同一行。 "property"，表达式中的点号操作符应该和属性在同一行。
    'import/order': 'off', // 暂时不清楚
    'no-trailing-spaces': 'off', // 禁用行尾空格
    'func-names': [1, 'as-needed',], // 要求或禁止使用命名的 function 表达式 as-needed需要时
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    radix: 'off', // 强制在 parseInt() 使用基数参数
    'no-unused-expressions': 'off', // 禁止出现未使用过的表达式
    'no-underscore-dangle': 'off', // 禁止标识符中有悬空下划线
    'no-nested-ternary': 'off', // 禁用嵌套的三元表达式
    'no-restricted-syntax': 'off', // 禁用特定的语法
    'no-mixed-operators': 'off', // 禁止混合使用不同的操作符
    'no-await-in-loop': 'off', // 禁止在循环中出现 await
    'import/no-extraneous-dependencies': 'off', // 暂时不清楚
    'import/no-unresolved': 'off', // 暂时不清楚
    'no-case-declarations': 'off', // 暂时不清楚
    'template-curly-spacing': 'off', // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'vue/valid-v-for': 'off', // 暂时不清楚
    '@typescript-eslint/no-var-requires': 'off', // TS
    '@typescript-eslint/no-empty-function': 'off', // TS
    'no-empty': 'off', // no-empty
    '@typescript-eslint/no-explicit-any': 'off',
    'guard-for-in': 'off', // 要求 for-in 循环中有一个 if 语句
    '@typescript-eslint/ban-types': 'off', // TS
    'class-methods-use-this': 'off', // 强制类方法使用 this
    'no-return-await': 'off', // 禁用不必要的 return await
    'vue/html-indent': ['error', 2,{
      'attribute': 0, // html标签内换行 属性tab对其设置
      'baseIndent': 1, // 基础tab数量
      'closeBracket': 0, // 关闭标签tab数
      'alignAttributesVertically': false,
      'ignores': [],
    },], // html中换行配置
    'vue/html-self-closing': 'off', // 暂时不清楚
    /*   暂时不明白
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: {
          max: 3,
          allowFirstLine: true,
        },
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ], */
    'vue/singleline-html-element-content-newline': 'off',

  },
};
