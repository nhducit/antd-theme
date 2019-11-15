import {
  DatePicker,
  Form,
  InputNumber,
  Select,
  Slider,
  Switch,
  Checkbox,
  Button,
  Breadcrumb,
  Menu,
  Dropdown,
  Radio,
  Alert,
  Progress
} from "antd";
import Router from "next/router";
import * as React from "react";
import { SiderComp } from "../components/SiderComp";
import { TransferComp } from "../components/TransferComp";
import { ModalComp } from "../components/ModalComp";

const FormItem = Form.Item;
const Option = Select.Option;

const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value: any) {
  console.log(`selected ${value}`);
}
export default function HomePage() {
  return (
    <div style={{ marginTop: 100 }}>
      <Form layout="horizontal">
        <FormItem
          label="Input Number"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber
            size="large"
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name="inputNumber"
          />
          <a href="#">Link</a>
        </FormItem>
        <FormItem
          label="Switch 5"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </FormItem>
        <FormItem
          label="Slider"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </FormItem>
        <FormItem
          label="Select"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select
            size="large"
            defaultValue="lucy"
            style={{ width: 192 }}
            // name="select"
          >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>
              disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>
        <FormItem
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name="startDate" />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          {/* <Button size="large" type="primary" htmlType="submit">
          OK
        </Button>
        <Button size="large" style={{ marginLeft: 8 }}>
          Cancel
        </Button> */}
        </FormItem>
      </Form>
      <CompHeader>Buttons</CompHeader>
      <ButtonExample></ButtonExample>
      <CompHeader>Breadcrumb</CompHeader>
      <BreadcrumbExample></BreadcrumbExample>
      <div>
        <Dropdown overlay={getMenu()} placement="bottomCenter">
          <Button>bottomCenter</Button>
        </Dropdown>
      </div>
      <CompHeader>Sider</CompHeader>
      <SiderComp></SiderComp>
      <CompHeader>Checkbox</CompHeader>
      <Checkbox>Checkbox</Checkbox>
      <CompHeader>Datepicker</CompHeader>
      <DatePicker />
      <CompHeader>Radio</CompHeader>
      <Radio>Radio</Radio>
      <CompHeader>Slider</CompHeader>
      <Slider defaultValue={30} />
      <CompHeader>Multi select</CompHeader>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={["a10", "c12"]}
        onChange={handleChange}
      >
        {children}
      </Select>
      <CompHeader>Transfer</CompHeader>
      <TransferComp></TransferComp>

      <CompHeader>Alert</CompHeader>

      <div>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </div>
      <CompHeader>Modal</CompHeader>
      <ModalComp></ModalComp>
      <CompHeader>Progress</CompHeader>
      <div>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </div>
      <div style={{ marginTop: 100 }}>bottom</div>
    </div>
  );
}

function CompHeader({ children }: { children: any }) {
  return <h1 style={{ marginTop: 32 }}>{children}</h1>;
}

function ButtonExample() {
  return (
    <div>
      <Button type="primary" size="small" loading>
        Loading
      </Button>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
  );
}

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}

const getMenu = () => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
