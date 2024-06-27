import React from "react";
import { Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import "./ProfileComponent.css";

const { Option } = Select;

export const ProfileComponent = (props) => {
  const { onChangeUserHandler, onProfileSubmit } = props;
  const { userName, loveFlying, webExamScore, birthDate, country, gender, occupation, hobbies, favoriteFood, dreamDestination } = props.userData;

  const onFinish = () => {
    localStorage.setItem("profileData", JSON.stringify(props.userData));
    onProfileSubmit();
  };

  return (
    <div className="profile-div">
      <h1>Profil Oluştur</h1>
      <Form
        name="profile_form"
        className="profile-form"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          userName: userName,
          loveFlying: loveFlying,
          webExamScore: webExamScore,
          birthDate: birthDate,
          country: country,
          gender: gender,
          occupation: occupation,
          hobbies: hobbies,
          favoriteFood: favoriteFood,
          dreamDestination: dreamDestination,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Kullanıcı Adı"
              name="userName"
              rules={[{ required: true, message: 'Kullanıcı adı zorunludur!' }]}
            >
              <Input
                name="userName"
                value={userName}
                onChange={onChangeUserHandler}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Uçmayı Seviyor Musunuz?"
              name="loveFlying"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Select
                name="loveFlying"
                value={loveFlying}
                onChange={(value) => onChangeUserHandler({ target: { name: 'loveFlying', value } })}
              >
                <Option value="Evet">Evet</Option>
                <Option value="Hayır">Hayır</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Web Dersi Vize Notu"
              name="webExamScore"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Input
                type="number"
                name="webExamScore"
                value={webExamScore}
                onChange={onChangeUserHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Doğum Tarihi"
              name="birthDate"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <DatePicker
                name="birthDate"
                value={birthDate}
                onChange={(date, dateString) => onChangeUserHandler({ target: { name: 'birthDate', value: dateString } })}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ülke"
              name="country"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Input
                name="country"
                value={country}
                onChange={onChangeUserHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Cinsiyet"
              name="gender"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Select
                name="gender"
                value={gender}
                onChange={(value) => onChangeUserHandler({ target: { name: 'gender', value } })}
              >
                <Option value="Erkek">Erkek</Option>
                <Option value="Kadın">Kadın</Option>
                <Option value="Diğer">Diğer</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Meslek"
              name="occupation"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Input
                name="occupation"
                value={occupation}
                onChange={onChangeUserHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Hobiler"
              name="hobbies"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Input
                name="hobbies"
                value={hobbies}
                onChange={onChangeUserHandler}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Favori Yemek"
              name="favoriteFood"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Input
                name="favoriteFood"
                value={favoriteFood}
                onChange={onChangeUserHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Hayalinizdeki Tatil Yeri"
              name="dreamDestination"
              rules={[{ required: true, message: 'Bu alan zorunludur!' }]}
            >
              <Input
                name="dreamDestination"
                value={dreamDestination}
                onChange={onChangeUserHandler}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button htmlType="submit" className="profile-btn">
            Onayla
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
