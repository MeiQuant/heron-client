<template>
  <div class="panel-columns is-full-height">
    <div class="columns is-full-height">
      <div class="column is-full-height">
        <div class="heron-panel-container is-full-height">
          <div class="nav panel-nav">
            <div class="nav-left">
              <div class="tabs is-toggle">
                <ul>
                  <li class="">
                    <a>
                      期权报价
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="nav-right">
              <div class="nav-item">
                <a>
                  <span class="icon"><i class="fa fa-window-close"></i></span>
                </a>
              </div>
              <div class="nav-item">
                <a>
            <span class="icon">
              <i class="fa fa-window-maximize"></i>
            </span>
                </a>
              </div>
            </div>

          </div>
          <div class="panel-body is-full-height">
            <option-quote></option-quote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">


  .panel-columns>.columns {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    position: relative;
  }

  .panel-columns>.columns>.column {
    margin: 0;
    padding: 0;
  }

  .panel-column-gap:hover {
    background-color: #ccc;
  }

  .panel-column-gap {
    width: 6px !important;
    z-index: 1;
    cursor: col-resize;
  }

  .heron-panel-container {

  }

  .panel-nav {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    height: 31px;
    min-height: auto;
  }

  .panel-body {
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    flex: 1;
  }
</style>
<script>
  import { OptionQuote } from 'components/options'
  export default {
    components: {
      OptionQuote
    }
  }
</script>
