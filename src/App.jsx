import { Layout, ConfigProvider, theme, Divider, Row, Col, Typography } from 'antd'

import { useContext } from 'react'

import { AuthContext } from './context/AuthContext'

import Loader from './components/ui/Loader/Loader'
import NavigationSidebar from './components/navigationSidebar/NavigationSidebar'
import NotesSidebar from './components/notesSidebar/NotesSidebar'
import SidebarCollapsedProvider from './context/SidebarCollapsedProvider'

const { Content } = Layout
const { Text } = Typography

const App = () => {
  let { isLoading } = useContext(AuthContext)

  if (isLoading) return <Loader />

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <Layout style={{ height: '100%' }}>
        <SidebarCollapsedProvider>
          <NavigationSidebar />


          <Divider type="vertical" style={{ margin: 0, height: '100%' }} />
          <NotesSidebar />

          <Content style={{ overflow: 'auto', padding: '20px', maxWidth: 800, margin: '0px auto' }}>
            <Row justify="center">
              <Col span={24}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur dolore placeat quas mollitia, libero facere
                  labore commodi error vero laudantium beatae facilis nobis? Officiis, commodi error aliquam molestiae fuga, repellat
                  debitis tenetur optio asperiores et corporis quasi suscipit quaerat delectus tempore sunt modi ducimus repudiandae
                  explicabo voluptates possimus veritatis iusto maxime. Labore ab, aut, cumque aperiam illo nobis ipsa enim maiores culpa
                  praesentium reiciendis sapiente dicta quas velit? Nihil qui explicabo architecto ratione numquam modi recusandae autem
                  ducimus! Delectus fugiat ad, eum atque, ratione suscipit eius, accusantium tempora dicta voluptates numquam sapiente!
                  Quisquam dolore ab dignissimos molestiae unde pariatur dolorum. Velit, magni nostrum! Nesciunt, cumque. Voluptate, iure a,
                  quibusdam temporibus minima quos cupiditate deserunt, veritatis quis dicta illo iste. Earum veritatis obcaecati quia,
                  nostrum quidem optio eius ipsam, sint, fugiat aperiam illum. Repellat sunt ex quasi doloremque provident vel, nihil,
                  inventore quo tempora omnis mollitia eligendi cupiditate vero, possimus blanditiis facilis quam ea fugit animi obcaecati
                  totam! Placeat minus maxime dolor earum ad, ratione deserunt numquam obcaecati animi veritatis amet non odio nostrum ea
                  doloribus cum a quas magni eius eligendi fugiat aspernatur. Vero placeat illo ipsam quas dolor doloremque, tenetur
                  veritatis optio incidunt ducimus, natus vel magni officia. Impedit quasi aliquam cumque explicabo suscipit ut magni illo?
                  Necessitatibus ullam voluptatem fugiat ut, totam alias neque odio natus tenetur. Natus quibusdam inventore quo praesentium
                  omnis sequi nulla, quisquam at voluptas quod. Dignissimos quidem perspiciatis qui reprehenderit officia, vel sed saepe
                  corrupti dolor itaque cumque vitae debitis aliquam, fuga, amet tempora? Ipsa, ipsam sequi dignissimos fugiat mollitia
                  deleniti optio animi a autem aliquid quidem totam fuga commodi cumque quam reprehenderit suscipit dicta natus itaque
                  beatae voluptas exercitationem officia unde doloribus! Quis quisquam ad molestias sapiente, omnis odio suscipit expedita
                  est! Dolorum dolore praesentium fuga pariatur nihil similique repudiandae exercitationem mollitia, cum quidem totam quae
                  eius veritatis facere necessitatibus, earum perspiciatis at culpa quaerat. Nemo delectus rerum cumque dolore. Quasi, totam
                  explicabo. Aut quia est suscipit, blanditiis esse explicabo delectus accusantium ad iste sed tenetur beatae architecto
                  eum, quos incidunt maxime dolor voluptatem quo dolore nesciunt neque illum labore doloribus. In dolorem eaque culpa
                  provident molestias possimus deserunt laboriosam! Doloremque ipsam possimus expedita soluta asperiores voluptate mollitia
                  molestiae incidunt, veritatis itaque culpa nemo tempore recusandae consectetur hic voluptatem modi corporis quibusdam
                  sint! Earum quaerat dolor explicabo nihil odit quasi aperiam repudiandae, nesciunt rerum reiciendis nobis ipsum! Veniam
                  porro quaerat earum repellendus, corrupti adipisci atque, mollitia beatae voluptas excepturi quibusdam, at cumque?
                  Doloremque officia autem esse pariatur alias consectetur rem, dignissimos commodi voluptatem est optio hic quasi laborum
                  placeat deserunt, reiciendis aliquam temporibus harum enim a voluptate? Praesentium earum quis error quibusdam ut dicta
                  beatae, enim quo in dolorum quam adipisci voluptates quas aut aliquid, soluta obcaecati modi eum facere, nesciunt nostrum
                  tempore officiis quaerat? Accusantium obcaecati autem sunt ex, fugit nobis similique debitis, voluptatum facilis rerum aut
                  eos sequi modi vitae deleniti quos vel. Adipisci veniam, totam ipsam expedita nulla suscipit dignissimos, vitae, impedit
                  optio alias perferendis. Accusantium perspiciatis vitae ex labore commodi ipsa temporibus modi magnam repellendus totam
                  numquam, rem at. Autem deleniti praesentium hic, eaque laborum magni alias magnam cumque amet, deserunt harum recusandae
                  dolores! Rerum illo inventore nobis fuga eaque quod saepe perferendis nam ducimus dolorem repellat quas commodi adipisci
                  modi, dignissimos, consectetur at quam numquam? Recusandae numquam magni rerum vitae beatae voluptates quas aperiam ullam
                  officiis enim cupiditate reiciendis, est optio! Esse ea illo reprehenderit assumenda obcaecati dolorum libero fuga ipsa
                  inventore dolor explicabo rerum facere, eos vitae, quos aliquid, alias dolores eveniet ut eaque nobis quaerat! Maiores
                  vitae praesentium suscipit doloribus. Nesciunt rerum quos beatae ullam non deserunt reprehenderit? Placeat at numquam
                  alias nobis dolorum dolorem eveniet porro? Minima vel ipsam aspernatur optio ab veniam magni laborum accusamus est tenetur
                  reprehenderit voluptate illum doloribus sunt dolorum autem recusandae ex id quo aut consequuntur asperiores, ad
                  cupiditate! Dolores incidunt nesciunt deleniti neque iusto ipsa dolorem quasi doloremque atque voluptas dicta amet
                  perferendis voluptatem natus, minus vitae iure! Ea, ipsam a perspiciatis tempora dicta quod pariatur cupiditate id quis in
                  velit earum iure vel aperiam saepe rerum cum reiciendis! Quasi, iste. Illum est magnam porro tempore nam sit dolore iure
                  commodi, nobis dicta adipisci asperiores fugiat fuga explicabo ipsam! Nisi ea quia nesciunt. Ipsum ipsa autem debitis
                  veritatis? Ullam neque et libero, consequuntur omnis beatae aperiam quaerat odit, architecto aut iste! Minus est
                  reprehenderit iste excepturi itaque dignissimos nulla ipsum accusamus temporibus odio inventore, distinctio amet dicta
                  esse. Nam officiis, laudantium possimus doloribus libero deserunt eveniet magni autem eos, temporibus laboriosam facilis
                  numquam neque perferendis cum eaque, voluptates incidunt non recusandae voluptatem. Hic incidunt officiis id earum ipsum
                  ratione labore modi totam vel, sapiente perferendis nisi neque reprehenderit praesentium natus ipsa beatae. At quod
                  blanditiis facere delectus repellendus quae libero maiores, consequatur, nam neque ipsum culpa magni exercitationem
                  dolorem aliquam molestiae fugit sit quo. Alias itaque rem cumque omnis adipisci, possimus, mollitia, qui eos
                  exercitationem perspiciatis sequi esse ipsa ea. Porro nulla delectus vitae, eaque quod debitis exercitationem, minus
                  dolore eveniet voluptate velit. Quaerat veniam omnis quos rem dolorum sit ducimus vel deserunt quibusdam libero itaque
                  alias ea beatae necessitatibus ab, maxime consectetur quod eum at illum nostrum iusto fugit odit? Blanditiis quod
                  praesentium hic minus? Eum corrupti doloremque sint magnam voluptate molestiae odio quisquam, numquam incidunt saepe
                  voluptatem hic! Voluptas nisi debitis asperiores nostrum deleniti quo eligendi cum, perspiciatis natus. Consequatur
                  pariatur tenetur minima temporibus impedit illum veritatis ex magni ducimus. Quisquam ex officiis molestiae nisi incidunt
                  corporis consectetur repellendus vel minus laboriosam ut perspiciatis expedita quod nam, at autem quos unde? Dicta,
                  sapiente dolorem voluptas est nemo quas vel et rerum atque maiores voluptatibus unde sequi sed rem cumque harum quis,
                  accusamus odio vero voluptatem voluptates obcaecati? Fuga vel, optio eveniet tempora explicabo fugit aspernatur a, ducimus
                  amet voluptates reprehenderit similique itaque! Quidem autem, vitae amet illo, corrupti minima in repellat ex assumenda
                  consequuntur mollitia quisquam aperiam! Accusamus, sit quae quisquam at cumque aliquam excepturi placeat! Aliquid minima
                  voluptatibus perferendis error accusamus possimus doloribus obcaecati alias.
                </Text>
              </Col>
            </Row>
          </Content>
        </SidebarCollapsedProvider>
      </Layout>
    </ConfigProvider>
  )
}

export default App
