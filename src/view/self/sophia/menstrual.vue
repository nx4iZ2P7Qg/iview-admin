<template>
  <Card>
    <h3 class="glance">总览</h3>
    <Row class="detail">
      <Col span="4">
        平均天数:
      </Col>
      <Col>
        {{mean}}
      </Col>
    </Row>
    <Row class="detail">
      <Col span="4">
        浮动天数:
      </Col>
      <Col>
        {{varDays}}
      </Col>
    </Row>
    <Row class="detail">
      <Col span="4">
        最近一次日期:
      </Col>
      <Col>
        {{lastDay}}
      </Col>
    </Row>
    <Row class="detail">
      <Col span="4">
        最近两次间隔:
      </Col>
      <Col>
        {{days}}
      </Col>
    </Row>
    <Row class="detail">
      <Col span="4">
        预计下次日期:
      </Col>
      <Col>
        {{next}}
      </Col>
    </Row>
    <h3>明细</h3>
    <Row class="table">
      <Col>
        <Table  border :columns="columns" :data="data"></Table>
        <!--<div style="margin: 10px;overflow: hidden">-->
          <!--<div style="float: right;">-->
            <!--<Page :total="12" :current="1" simple @on-change="changePage"></Page>-->
          <!--</div>-->
        <!--</div>-->
      </Col>
    </Row>
    <Row>
      <h3>趋势</h3>
      最近12个月/所有时间
      平均天数趋势
      浮动天数趋势
    </Row>
  </Card>
</template>

<script>
import {
  glance
} from '@/api/sophia'

export default {
  data () {
    return {
      mean: '',
      varDays: '',
      lastDay: '',
      days: '',
      next: '',
      columns: [
        {
          title: '序号',
          align: 'center',
          type: 'index'
        },
        {
          title: '日期',
          align: 'center',
          key: 'date'
        }
      ],
      data: [
        {
          date: '2019-08-20'
        },
        {
          date: '2019-01-01'
        }
      ]
    }
  },
  methods: {

  },
  mounted () {
    glance().then(res => {
      if (res.status === 200) {
        this.mean = res.data.mean
        this.varDays = res.data.varDays
        this.lastDay = res.data.lastDay
        this.days = res.data.days
        this.next = res.data.next
      } else {
        this.$Message.error('响应异常')
      }
    }).catch(res => {
      this.$Message.error('请求异常')
    })
  }
}
</script>

<style>
.glance {
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.detail {
  margin-left: 50px;
  margin-top: 10px;
}
h3 {
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 50px;
}
.table {
  margin-left: 50px;
  margin-right: 50px;
}
</style>
