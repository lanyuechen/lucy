# lucy

> 超级强大的表单编辑器

## 数据类型

### Config 表单项配置

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| type | enum | 表单项类型，详见[表单项类型](#表单项类型) | input | 是 |
| title | string | 表单项标题 | - | 否 |
| key | string | 表单项的key值，在添加到编辑器中时系统生成，用户可编辑 | - | 是 |
| options | array | type=select,checkbox-group,radio-group等选项 | - | 否 |
| tag | string | 表单项分类标签，用于分类或表单项属性配置项筛选等 | - | 否 |
| props | string[] | 表单项属性配置表单 | - | 否 |
| components | array | type=dynamic，view时的表单配置，相当于嵌套 | - | 否 |
| useView | boolean | type=dynamic，组件子项是否折叠 | - | 否 |
| 其它 | any | 任何值都可以写入到配置中，只要表单项组件在解析的时候使用即可，例如defaultValue、placeholder等 | - | 否 |

#### 表单项类型

| type | 描述 | 分类 |
| ---- | ---- | ---- |
| input | 单行文本 | 基础组件 |
| number | 数字 | 基础组件 |
| textarea | 多行文本 | 基础组件 |
| select | 下拉框 | 基础组件 |
| checkbox-group | 复选框组 | 基础组件 |
| radio-group | 单选框组 | 基础组件 |
| switch | 开关 | 基础组件 |
| date | 日期 | 日期时间组件 |
| date-range | 日期范围 | 日期时间组件 |
| time | 时间 | 日期时间组件 |
| time-range | 时间范围 | 日期时间组件 |
| date-time | 日期时间 | 日期时间组件 |
| date-time-range | 日期时间范围 | 日期时间组件 |
| dynamic | 动态组件 | 高级组件 |
| view | 视图组件 | 高级组件 |

### FoundryConfig

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| components | [Config[]](#config表单项配置) | 表单编辑器组件配置 | - | 是 |
| form | [Config[]](#config表单项配置) | 表单属性配置项 | - | 是 |
| reference | [Config[]](#config表单项配置) | 表单项属性配置项 | - | 是 |

### ComponentConfigs

## 组件

### Foundry 表单编辑器组件

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| config | [FoundryConfig](#foundryconfig) | 表单编辑器初始配置，包括组件、组件支持属性等 | - | 是 |

### Editor 表单编辑组件

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| dataSource | object | 表单描述数组，**Editor组件内通过直接修改dataSource属性实现更新** | [] | 是 |
| formConfig | object | 表单属性配置 | {} | 否 |
| current | string | 当前选中的组件id，用于高亮显示选中的组件，**指定时需要使用.sync修饰** | - | 否 |
| formData | object | 表单输出结果 | {} | 否 |
| @click | event | 组件单击事件 | - | 否 |

- 组件选中、删除、复制、拖动

> 依赖`FormBox`、`FormItem`组件

### FormBox 表单项容器组件

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| active | boolean | 该表单项是否处于active状态 | false | 否 |
| @click | 点击事件 | 选中该表单项 | - | 否 |
| @copy | 复制事件 | 复制该表单项 | - | 否 |
| @remove | 删除事件 | 删除该表单项 | - | 否 |

### Viewer 表单展示组件

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| dataSource | object | 同[Editor](#editor) | [] | 是 |
| formConfig | object | 同[Editor](#editor) | {} | 否 |
| value/v-model | object | 表单绑定值 | - | 是 |

> 依赖`FormItem`组件

### FormItem 表单项组件——品如的衣柜

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| config | object | 表单项描述对象 | {} | 是 |
| value/v-model | object | 表单项绑定值 | - | 是 |
| disabled | boolean | 是否禁用该表单项 | - | 否 |


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
