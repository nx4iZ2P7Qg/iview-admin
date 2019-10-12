<template>
  <Card :padding="50">
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
        <Table border :columns="columns" :data="data"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :current="pageParam.pageNumber"
                  :page-size="pageParam.pageSize" :total="totalElements" simple @on-change="changePage"></Page>
          </div>
        </div>
      </Col>
    </Row>
<!--    todo df 趋势数据，同比数据-->
<!--    <Row>-->
<!--      <h3>趋势</h3>-->
<!--      最近12个月/所有时间-->
<!--      平均天数趋势-->
<!--      浮动天数趋势-->
<!--    </Row>-->
  </Card>
</template>

<script>
import {
  getGlance,
  getMenstrualRecords
} from '@/api/queen'

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
          key: 'id'
        },
        {
          title: '日期',
          align: 'center',
          key: 'dt'
        },
        {
          title: '添加记录日期',
          align: 'center',
          key: 'createAt'
        }
        // todo df 添加人，先完成用户功能才有
      ],
      data: [],
      pageParam: {
        pageNumber: 1,
        pageSize: 5
      },
      totalElements: 0
    }
  },
  methods: {
    initGlance () {
      getGlance().then(res => {
        if (res.status === 200) {
          this.mean = res.data.mean
          this.varDays = res.data.varDays
          this.lastDay = res.data.lastDay
          this.days = res.data.days
          this.next = res.data.next
        } else {
          this.$Message.error('响应异常')
        }
      }).catch(() => {
        this.$Message.error('请求异常')
      })
    },
    initTableDetail () {
      getMenstrualRecords(this.pageParam).then(res => {
        if (res.status === 200) {
          this.data = res.data.content
          this.totalElements = res.data.totalElements
        } else {
          this.$Message.error('响应异常')
        }
      }).catch(() => {
        this.$Message.error('请求异常')
      })
    },
    changePage (v) {
      this.pageParam.pageNumber = v
      this.initTableDetail()
    }
  },
  mounted () {
    this.initGlance()
    this.initTableDetail()
  }
}
</script>

<style>
.detail {
  margin: 10px;
}
h3 {
  margin-top: 50px;
  margin-bottom: 20px;
}
.glance {
  margin-top: 0;
}
.table {
  margin: 10px;
}
</style>
