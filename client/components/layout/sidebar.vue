<template>
  <div>
    <div class="heron-settings-container box">
      <div class="heron-settings menu">
        <p class="menu-label">
          设置
        </p>
        <ul class="heorn-settings-item menu-list">
          <li class="">
            <a>
                  <span class="icon" title="">
                    <i class="fa fa-cog"></i>
                  </span>
              系统设置
            </a>
          </li>
        </ul>

        <p class="menu-label">
          面板设置
        </p>

        <ul class="heorn-settings-item menu-list">
          <li>
            <a @click="requestFullScreen">
              <span class="icon" title="全屏显示">
                <i class="fa fa-window-maximize"></i>
              </span>
              <span>全屏显示</span>
            </a>
          </li>

          <li>
            <a>
              <span class="icon"><i class="fa fa-cog"></i></span>
              <span>新增面板</span>
            </a>
          </li>

          <li>
            <a>
              <span class="icon"><i class="fa fa-cog"></i></span>
              <span>另存面板</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"><i class="fa fa-cog"></i></span>
              <span>移除当前面板</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"><i class="fa fa-cog"></i></span>
              <span>恢复默认面板</span>
            </a>
          </li>
        </ul>

        <p class="menu-label">
          组件列表
        </p>

        <ul class="heron-settings-item menu-list">
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>期货报价</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>期权报价</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>波动率曲面</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>自选报价</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>盘口</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>报单/回报</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>持仓</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>资金查询</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>持仓查询</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>五档报价</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>组合持仓</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>实时走势</span></a></li>
          <li><a><span class="icon"><i class="fa fa-cog"></i></span><span>技术图表</span></a></li>
        </ul>

      </div>
    </div>
  </div>
</template>
<style>
  .heron-settings-container {
    position: absolute;
    top: 2px;
    bottom: 10px;
    right: 0;
    width: 210px;
    z-index: 99000;
    transition: transform 500ms;
  }

  .heron-settings {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 13px 20px 20px 20px;
  }

  .heorn-settings-item {
    min-width: 138px;
    margin-bottom: 15px;
  }
</style>
<script>
  export default {
    methods: {
      requestFullScreen: function () {
        document.documentElement.webkitRequestFullScreen()
      }
    }
  }
</script>
