    <template>
        <div>
            <h2>{{msg}}</h2>
            <hr/>
            <h3>{{$store.getters.count}}</h3>
            <div>
                <button @click="addAction">+</button>
                <button @click="reduceAction">-</button>
            </div>
        </div>
        
    </template>
    <script>
        import store from '@/store/store.js'
        import {mapState,mapMutations,mapGetters, mapActions} from 'vuex';
        export default{
            data(){
                return{
                    msg:'Hello Vuex',

                }
            },
            //  computed:{
            //     count(){
            //         return this.$store.state.count;
            //     }
            // },
            //  computed:mapState({
            // count:state=>state.count  //理解为传入state对象，修改state.count属性
            // }),
            // computed:mapState(["count"]),
            computed:{//在vue的构造器里只能有一个computed属性，写多个会覆盖，使用es6的展开运算符
              ...mapState(['count']),
              // count(){
              //   return this.$store.getters.count
              // }
              ...mapGetters(['count'])
            },
            //  methods: {
            //   add () {
            //     store.commit('add',10)
            //   },
            //   reduce () {
            //       store.commit('reduce')
            //   }
            // },
            // methods:mapMutations(['add','reduce']),
            methods:{
              ...mapMutations(['add','reduce']),
              ...mapActions(['addAction','reduceAction'])
            },
            store

        }
    </script>