import { userCreate, userDelete, userList, userUpdate } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProTable,
  ProFormSelect,
} from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.CurrentUser) => {
  const hide = message.loading('正在添加');
  try {
    await userCreate({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.CurrentUser) => {
  const hide = message.loading('正在更新');
  try {
    await userUpdate({ ... fields, id: fields.id });
    hide();

    message.success('更新成功');
    return true;
  } catch (error) {
    hide();
    message.error('更新失败请重试！');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.CurrentUser[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await userDelete({
      id: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('删除成功');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败');
    return false;
  }
};

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.CurrentUser>();
  const [selectedRowsState, setSelectedRows] = useState<API.CurrentUser[]>([]);


  const columns: ProColumns<API.CurrentUser>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity); // 设置当前行的数据
              setShowDetail(true);   // 显示详细信息
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '用户身份',
      dataIndex: 'role',
      valueEnum: {
        admin: { text: '管理员' },
        enterprise: { text: '企业' },
        user : { text: '普通用户' },
      },

    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            setCurrentRow(record); // 设置当前行数据
            handleUpdateModalOpen(true); // 打开更新表单
            // 输出当前行数据
            console.log(currentRow);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      {/* 列表渲染 */}
      <ProTable<API.CurrentUser, API.PageParams>
        headerTitle='查询表格'
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={userList}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {/* 批量操作 */}
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择 <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a> 项
              &nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
      {/* 新建 */}
      <ModalForm
        title="新建"
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.CurrentUser);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
      <ProFormText
        label="用户名"
        rules={[
          {
            required: true,
            message: "用户名是必填项",
          },
        ]}
        width="md"
        name="name"
      />
      <ProFormText
        label="邮箱"
        rules={[
          {
            required: true,
            message: "邮箱是必填项",
          },
          {
            type: 'email',
            message: "请输入有效的邮箱地址",
          },
        ]}
        width="md"
        name="email"
      />
      <ProFormText.Password
        label="密码"
        rules={[
          {
            required: true,
            message: "密码是必填项",
          },
        ]}
        width="md"
        name="password"
      />
      </ModalForm>
      {/* 更新 */}
      <ModalForm
        key={currentRow?.id}
        title="更新"
        width="400px"
        open={updateModalOpen}
        onOpenChange={handleUpdateModalOpen}
        onFinish={async (value) => {
          const updatedValue = { ...value, id: currentRow?.id };
          const success = await handleUpdate(updatedValue);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
          <ProFormText
            label="用户名"
            width="md"
            name="name"
            initialValue={currentRow?.name}
          />
          <ProFormText
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: "请输入有效的邮箱地址",
              },
            ]}
            width="md"
            name="email"
            initialValue={currentRow?.email}
          />
        <ProFormText.Password
          label="密码"
          width="md"
          name="password"
        />
        <ProFormSelect
            label="用户身份"
            width='xs'
            name="role"
            initialValue={currentRow?.role}
            options={[
              {
                value: 'admin',
                label: '管理员',
              },
              {
                value: 'enterprise',
                label: '企业',
              },
              {
                value: 'user',
                label: '普通用户',
              },
            ]}
          />
      </ModalForm>
      {/* 详情 */}
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.CurrentUser>
            column={2}
            title={currentRow?.name}
            request={async () => {
              const data = { ...currentRow };
              return { data };
            }}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.CurrentUser>[]}
          >
          </ProDescriptions>
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
