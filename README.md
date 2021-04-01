# lucy

> 超级强大的表单编辑器

> 随着功能不断的加强，系统的复杂度变得越来越高，正在朝着不可控的方向发展。。。主要复杂的点在于妄图使用简洁统一的结构描述复杂的逻辑。

- 左侧`自定义组件`其实就是用户编辑的表单，通过`view`组件封装成一个等价于表单项的组件，实现嵌套和复用。
- 左侧`基础组件`、`日期时间组件`、`其他组件`等除了表现形式没有区别，只不过分个组显得更清晰。其通过`src/config/components.yaml`配置
- 右侧`表单配置`面板通过`src/config/form-config.yaml`配置，通过`view`组件渲染出来
- 右侧`属性配置`面板通过`src/config/mapping.yaml`配置，通过`view`组件渲染出来，配置中定义了各个组件对应的配置
- `src/config/reference.yaml`中定义了一些通用的表单项，`属性配置`可以通过key直接饮用这里的配置
- 表单支持主题定制，但貌似目前并不怎么完善

## Todo

- 主题定制
- 打包单个文件，用于解析表单配置生成表单
- 支持扩展组件（如果支持了，考虑将现有组件都通过扩展方式引入）
- 表单默认值配置项智能渲染，输入框的默认值通过输入框指定，数值类型的默认值通过数值组件指定等等。
- 支持下拉框等配置远程数据
- 升级到vue3.x
- React版
- 完善文档
- 支持json编辑器

## 数据类型

### Config 表单项配置

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| type | enum | 表单项类型，详见[表单项类型](#表单项类型) | input | 是 |
| title | string | 表单项标题 | - | 否 |
| key | string | 表单项的key值，在添加到编辑器中时系统生成，用户可编辑 | - | 是 |
| options | array | type=select,checkbox-group,radio-group等选项 | - | 否 |
| tag | string | 表单项分类标签，用于分类或表单项属性配置项筛选等 | - | 否 |
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
| checkbox | 复选框 | 基础组件 |
| radio-group | 单选框组 | 基础组件 |
| switch | 开关 | 基础组件 |
| upload | 文件上传 | 基础组件 |
| date | 日期 | 日期时间组件 |
| date-range | 日期范围 | 日期时间组件 |
| time | 时间 | 日期时间组件 |
| time-range | 时间范围 | 日期时间组件 |
| date-time | 日期时间 | 日期时间组件 |
| date-time-range | 日期时间范围 | 日期时间组件 |
| dynamic | 动态组件 | 高级组件 |
| view | 视图组件 | 高级组件 |
| icon | 图表选择 | 其他组件 |
| color | 颜色选择 | 其他组件 |
| rate | 评分 | 其他组件 |
| slider | 滑杆 | 其他组件 |
| slider-range | 区间滑杆 | 其他组件 |

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
