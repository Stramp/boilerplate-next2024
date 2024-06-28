import * as S from './styles'
interface MainTypes {
  title?: string
}
const Main = ({ title = 'React Avançado' }: MainTypes) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Main
