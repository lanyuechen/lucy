<template>
  <div>
    <viewer
      :data-source="component"
      :value="value"
      @input="(val) => handleChange(val)"
    />
    <code><pre>{{ JSON.stringify(value) }}</pre></code>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: {},
      component: [
        {
          "type": "input",
          "title": "标题",
          "key": "title",
          "tag": "basic"
        },
        {
          "type": "input",
          "title": "字段索引",
          "key": "key",
          "tag": "basic"
        },
        {
          "type": "dynamic",
          "title": "规则设置",
          "key": "rules",
          "components": [
            {
              "type": "view",
              "title": "xxx",
              "components": [
                {
                  "type": "select",
                  "title": "规则类型",
                  "key": "type",
                  "options": [
                    {
                      "key": "required",
                      "value": "必需"
                    },
                    {
                      "key": "number",
                      "value": "数字校验"
                    }
                  ]
                },
                {
                  "type": "input",
                  "title": "错误信息",
                  "key": "message"
                },
                {
                  "type": "number",
                  "title": "最大值",
                  "key": "max",
                  "linkage": {
                    "type": "hidden",
                    "condition": "type==='number'"
                  }
                }
              ],
            }
          ],
          "tag": "rules"
        },
        {
          "type": "view",
          "title": "联动设置",
          "formConfig": {
            "labelPosition": "top"
          },
          "components": [
            {
              "type": "select",
              "title": "联动类型",
              "key": "type",
              "options": [
                {
                  "key": "disabled",
                  "value": "禁用"
                },
                {
                  "key": "enabled",
                  "value": "可用"
                },
                {
                  "key": "hidden",
                  "value": "隐藏"
                },
                {
                  "key": "shown",
                  "value": "显示"
                }
              ]
            },
            {
              "type": "dynamic",
              "title": "条件设置",
              "key": "condition",
              "formConfig": {
                "inline": true
              },
              "components": [
                {
                  "type": "select",
                  "key": "field",
                  "options": [

                  ]
                },
                {
                  "type": "select",
                  "key": true,
                  "options": "=|>|>=|<|<=|!="
                },
                {
                  "type": "input",
                  "key": "value"
                }
              ]
            },
            {
              "type": "textarea",
              "title": "条件设置",
              "key": "condition"
            }
          ],
          "tag": "linkage"
        },
        {
          "type": "input",
          "title": "占位内容",
          "key": "placeholder",
          "tag": "placeholder"
        },
        {
          "type": "input",
          "title": "默认值",
          "key": "defaultValue",
          "tag": "defaultValue"
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>

</style>
