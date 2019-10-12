<template>
  <Card :padding="50">
    <Row>
      <!--<Col span="6">-->
        <!--<Timeline pending="true">-->
          <!--<TimelineItem>-->
            <!--<p class="time">1984</p>-->
            <!--<p class="content">出生</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">1990</p>-->
            <!--<p class="content">入小学</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">1997</p>-->
            <!--<p class="content">学习英文</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">1999</p>-->
            <!--<p class="content">接触FF8</p>-->
            <!--<p class="content">接触月下夜想曲</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2000</p>-->
            <!--<p class="content">中考</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2003</p>-->
            <!--<p class="content">高考(4xx)</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2004</p>-->
            <!--<p class="content">再次高考(571)</p>-->
            <!--<p class="content">海军工程大学地方生院</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2006</p>-->
            <!--<p class="content">接触诗人沙加</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2008</p>-->
            <!--<p class="content">考研(295)</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2009</p>-->
            <!--<p class="content">再次考研(355)</p>-->
            <!--<p class="content">华中科技大学计算机学院</p>-->
            <!--<p class="content">染上烟瘾</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2013</p>-->
            <!--<p class="content">认识Sophia</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2014</p>-->
            <!--<p class="content">入职电讯盈科</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2016</p>-->
            <!--<p class="content">入职润雅</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2018</p>-->
            <!--<p class="content">入职CertusNet</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>-->
            <!--<p class="time">2019</p>-->
            <!--<p class="content">学习日文</p>-->
            <!--<p class="content">戒烟</p>-->
            <!--<p class="content">副业经商-电子烟</p>-->
          <!--</TimelineItem>-->
          <!--<TimelineItem>待续</TimelineItem>-->
        <!--</Timeline>-->
      <!--</Col>-->
      <Col>
          <Collapse simple accordion>
            <Panel v-for="profile in profiles" v-bind:key="profile.year">
              {{ profile.year }}
              <p v-for="event in profile.events" v-bind:key="event" slot="content">{{ event }}</p>
            </Panel>
          </Collapse>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  data () {
    return {
      profiles: [
        {
          year: 1984,
          events: [
            '出生'
          ]
        },
        {
          year: 1990,
          events: [
            '入小学'
          ]
        },
        {
          year: 1997,
          events: [
            '学习英文'
          ]
        },
        {
          year: 1999,
          events: [
            '最终幻想8',
            '月下夜想曲'
          ]
        },
        {
          year: 2000,
          events: [
            '中考'
          ]
        },
        {
          year: 2003,
          events: [
            '高考(4xx)'
          ]
        },
        {
          year: 2004,
          events: [
            '再次高考(571)',
            '海军工程大学'
          ]
        },
        {
          year: 2006,
          events: [
            '诗人沙加'
          ]
        },
        {
          year: 2008,
          events: [
            '考研(295)'
          ]
        },
        {
          year: 2009,
          events: [
            '再次考研(355)',
            '华中科技大学',
            '染上烟瘾'
          ]
        },
        {
          year: 2013,
          events: [
            '认识Sophia'
          ]
        },
        {
          year: 2014,
          events: [
            '电讯盈科'
          ]
        },
        {
          year: 2016,
          events: [
            '润雅'
          ]
        },
        {
          year: 2018,
          events: [
            'CertusNet'
          ]
        },
        {
          year: 2019,
          events: [
            '学习日文',
            '戒烟',
            '副业-电子烟'
          ]
        },
        {
          year: 2074,
          events: [
            '离世'
          ]
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

<style scoped>
  /*.time {*/
    /*font-size: 14px;*/
    /*font-weight: bold;*/
  /*}*/

  /*.content {*/
    /*padding-left: 5px;*/
  /*}*/
</style>
