<template>
  <div>
    <div ref="myholder"></div>
  </div>
</template>

<script>
  import joint from 'jointjs'

  export default {
    name: 'JointDia',
    mounted() {
      this.graph = new joint.dia.Graph
      this.graph.on('add', (elm) => {
        console.log('add : ' + elm.cid)
      })
      let paper = new joint.dia.Paper({
        el: this.$refs.myholder,
        model: this.graph,
        width: 400,
        height: 300,
        gridSize: 1,
        drawGrid: true,
        background: {
          color: 'rgba(0, 128, 0, 0.1)'
        }
      })

      paper.on('cell:pointerup', (cellView) => {
        const linkMode = this.linkMode
        if (!linkMode) return
        if (this.from === null) {
          cellView.highlight()
          this.cellViewFrom = cellView
          this.from = cellView.model
        } else if (this.to === null) {
          this.to = cellView.model
        }
        if (this.from && this.to) {
          this.addLink(this.from, this.to)
          this.from = null
          this.to = null
          this.cellViewFrom.unhighlight()
        }
      })

      const rect1 = this.addNode('hola')
      const rect2 = this.addNode('chao')
      const rect3 = this.addNode('bla')
      this.addLink(rect1, rect2)
      this.addLink(rect1, rect3)
    },
    data() {
      return {
        graph: {},
        colors: ['red', 'blue', 'black', 'orange', 'green'],
        cellViewFrom: null,
        from: null,
        to: null,
      }
    },
    props: {
      nodeName: String,
      linkMode: Boolean,
    },
    watch: {
      nodeName: {
        handler (newVal, oldVal) {
          this.addNode(newVal)
        }
      },
      linkMode: {
        handler (newVal, oldVal) {
          if (this.cellViewFrom) {
            this.cellViewFrom.unhighlight()
          }
          this.cellViewFrom = null
          this.from = null
          this.to = null
        }
      }
    },
    methods: {
      addNode(name) {
        const rect = new joint.shapes.standard.Rectangle()
        const x = Math.random() * 330
        const y = Math.random() * 220
        rect.position(x, y)
        rect.resize(100, 40)
        rect.attr({
          body: {
            fill: this.colors[parseInt(Math.random() * Math.floor(this.colors.length))]
          },
          label: {
            text: name,
            fill: 'white'
          }
        })
        rect.on('change:position', (e, position)=> {
          console.log(e.cid, position.x, position.y)
        })
        rect.addTo(this.graph)
        return rect
      },
      addLink(source, target) {
        const link = new joint.shapes.standard.Link()
        link.source(source)
        link.target(target)
        link.addTo(this.graph)
      }
    }
  }
</script>