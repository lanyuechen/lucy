## 配置简写形式

### component为扩展字符串（type|title|tag）

```
"input|单行文本|基础组件"
  = { "type": "input", "title": "单行文本", "tag": "基础组件" }
"input||基础组件"
  = { "type": "input", "tag": "基础组件" }
```

### component为对象（type为扩展字符串（type|title|tag））

```
{ "type": "input|单行文本|基础组件", ...others }
  = { "title": "单行文本", "tag": "基础组件", ...others, "type": "input" }
{ "type": "input|单行文本", "title": "多行文本" }
  = { "type": "input", "title": "多行文本" }
```

### component.option为字符串时（key1:val1|key2:val2|...）

```
"key1:val1|key2:val2"
  = [{ "key": "key1", "value": "val1" }, { "key": "key2", "value": "val2" }]
"key1|key2:val2"
  = [{ "key": "key1", "value": "key1" }, { "key": "key2", "value": "val2" }]
```

### component.option为字符串数组时（[key1:val1, key2:val2]）

```
["key1:val1", "key2:val2"]
  = [{ "key": "key1", "value": "val1" }, { "key": "key2", "value": "val2" }]
["key1", "key2:val2"]
  = [{ "key": "key1", "value": "key1" }, { "key": "key2", "value": "val2" }]
```

### component.option为二维数组（[[key1, val1], [key2, val2]]）

```
[["key1", "val1"], ["key2", "val2"]]
  = [{ "key": "key1", "value": "val1" }, { "key": "key2", "value": "val2" }]
[["key1"], ["key2", "val2"]]
  = [{ "key": "key1", "value": "key1" }, { "key": "key2", "value": "val2" }]
```

### component.option各种写法混用

```
["key1:val1", ["key2", "val2"], { "key": "key3", "value": "val3" }]
  = [{ "key": "key1", "value": "val1" }, { "key": "key2", "value": "val2" }, { "key": "key3", "value": "val3" }]
```
