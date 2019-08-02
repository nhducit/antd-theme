import {
  DatePicker,
  Form,
  InputNumber,
  Select,
  Slider,
  // Button
  Switch
} from "antd";
import Router from "next/router";
import * as React from "react";
import { getLogin } from "../utils/auth";
const FormItem = Form.Item;
const Option = Select.Option;

export default function HomePage() {
  React.useEffect(() => {
    if (!getLogin().login) {
      Router.replace("/login");
    }
  }, []);
  return (
    <div style={{ marginTop: 100 }}>
      <button
        onClick={() => {
          Router.push("/list");
        }}
      >
        List
      </button>
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
    </div>
  );
}
