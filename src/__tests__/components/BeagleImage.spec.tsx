/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

// Link.react.test.js
import * as React from 'react'
import { mock } from 'jest-mock-extended'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount, shallow } from 'enzyme'
import { CSSProperties } from 'styled-components'
import { BeagleContext } from '../../types'
import BeagleImage, { ImagePath } from '../../components/BeagleImage'

let beagleContextMock: any
let wrapper: any
const mockStyle: CSSProperties = {
  height: '100',
  width: '50',
}
const mockPath: ImagePath = {
  _beagleImagePath_: 'local',
  url: 'mytesteimg.png',    
}


configure({ adapter: new Adapter() })
beforeAll(() => {
  beagleContextMock = mock<BeagleContext>()
  wrapper = mount(<BeagleImage 
    className="Test Class" 
    style={mockStyle} 
    path={mockPath} 
    beagleContext={beagleContextMock}/>)
})

test('Beagle snapshot image', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should validate props', () => {
  const props: any = wrapper.props()
  expect(props.className).toEqual('Test Class')
  expect(props.path).toEqual(mockPath)
  expect(props.beagleContext).toEqual(beagleContextMock)
})

