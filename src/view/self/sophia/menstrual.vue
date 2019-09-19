<template>
  <Card :padding="50">
    <h3>总览</h3>
    <br/>
    <Row>
      <Col span="4">
        平均天数:
      </Col>
      <Col>
        34.2
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4">
        浮动天数:
      </Col>
      <Col>
        4.0
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4">
        最近一次日期:
      </Col>
      <Col>
        2019-08-07
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4">
        最近两次间隔:
      </Col>
      <Col>
        33
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4">
        预计下次日期:
      </Col>
      <Col>
        2019-08-07
      </Col>
    </Row>
    <br>
    <br/>
    <h3>明细</h3>
    <br/>
    <Row>
      <Col>
        <Table  border :columns="columns" :data="data"></Table>
        <!--<div style="margin: 10px;overflow: hidden">-->
          <!--<div style="float: right;">-->
            <!--<Page :total="12" :current="1" simple @on-change="changePage"></Page>-->
          <!--</div>-->
        <!--</div>-->
      </Col>
    </Row>
    <br/>
    <br/>
    <Row>
      <h3>趋势</h3>
      <br/>
      最近12个月/所有时间
      平均天数趋势
      浮动天数趋势
    </Row>
    <div>{{ xxx }}</div>
  </Card>
</template>

<script>

export default {
  data () {
    return {
      xxx: '',
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

  }
}
</script>

<style>

</style>
