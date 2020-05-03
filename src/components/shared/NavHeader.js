import Logo from './Logo'
import NavButton from './NavButton'

const Actual = () => {
  return (
    <div id="header">
      <div class="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div class="w-full max-w-screen-xl relative mx-auto px-6">
          <div class="flex items-center -mx-6">
            <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              <div class="flex items-center">
                <a href="/" class="block lg:mr-4">
                  <Logo />
                </a>
              </div>
            </div>
            <NavButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default class NavHeader extends React.Component {
  render() {
    return <div></div>
  }
}
