import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../_pagination/Pagination";
import "../_product/AdminProduct";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../actions/admin/products/AdProduct";
function Bill(props) {
  // QUẢN LÝ API
  const api = axios.create({
    baseURL: `http://localhost:4333/product`,
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.GetProductDatabase);
  console.log(list);
  // QUẢN LÝ SẢN PHẨM.
  // 1. VIEW.

  // 1.1 Get tất cả sản phẩm của product.
  // Ở đây, tất cả sản phẩm đã lưu ở Redux GetProductDatabase.
  // => Gọi về sử dụng.
  const [state, setState] = useState({ data: [], edit: [], submitEdit: false });
  const [edit, setEdit] = useState({});

  const [currentpage, setCurrentpage] = useState(1);
  // biến postperpage này như size dị...
  //ví dụ danh sách 10 phần tử cho nó là 2 thì hiển thị danh sách 2 còn 8 phần tử kia phần trang ra 1,2,3,4,5
  //gồm 5 trang hỏng tin thử đi

  //trang có bao nhiêu phần tử.
  const [postperpage, setPostperpage] = useState(8);
  // biến totalPages này để set mảng chứa số trang bị cắt 1 2 3

  // số lượng trang.
  const [totalPages, setTotalPages] = useState([]);
  const getUser = async () => {
    //khai báo phần tử cuối
    const indexofLastPost = currentpage * postperpage;
    //khai báo phần tử đầu
    const indexofFirstPost = indexofLastPost - postperpage;
    try {
      let data = await api.get("/").then(({ data }) => data);
      console.log(data.result);
      let arrPage = [];
      const Post = data.result.slice(indexofFirstPost, indexofLastPost);
      //                      1*2 = 2,            ,  2-2 = 0
      // 0,1
      // data => 2-> 8;
      setState({ data: Post });
      console.log(state);
      // cắt danh sách mảng bằng slice phần tử đầu phần tử cuối
      for (
        let i = 1;
        i <= Math.ceil(parseInt(data.result.length) / postperpage);
        i++
      ) {
        arrPage.push({ item: i });
      }
      // rảnh log mảng arrPage ra xem...
      // số lượng trang - li
      setTotalPages(arrPage);
      //setTotalPages là cái mảng bị cắt rồi đó a e.....
    } catch (error) {
      console.error(error);
    }
  };
  const onAddPage = (page) => {
    setTimeout(function () {
      setCurrentpage(page);
    }, 1000);
  };
  useEffect(() => {
    getUser();
    if (currentpage) {
      getUser();
    }
  }, [currentpage]);
  //function
  // 1. thêm sản phẩm mới.
  // chuyển link sang giao diện upload sản phẩm.
  const handleClickADD = () => {
    history.push("product/upload");
  };
  // 2. xóa sản phẩm.
  // 2.1 click: button xóa.
  // 2.2 xóa
  const deleteUser = async (id) => {
    let dele = await api.delete(`/${id}`);
    getUser();
  };

  // 3. Sửa sản phẩm
  // 3.1 Click, lấy giá trị hiện tại lưu vào edit => chuyển trang.
  // 3.2 thực hiện chỉnh sửa bên form upload.
  // 3.3 cập nhập, lên database.
  //
  // 3. sửa sản phẩm
  // Sửa nhanh được 1 vài thuộc tính.
  // Sửa chi tiết => chuyển trang sang giao diện upload. đăng.
  // 3.1 hiển thị giao diện sửa.
  const handleClickEDIT = async (id, value) => {
    console.log(id);
    console.log(value);
    dispatch(actions.getProductEdit(value));
    history.push("product/upload");
  };

  // 3.2 nhận thông tin sửa.
  // 3.2.1 lấy thông tin hiện tại theo id.
  // 3.2.2 xuất ra form.
  // 3.2.3 nhận thông tin nhập vào.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEdit((edit) => ({ ...edit, [name]: `${value}` }));
  };
  // 3.3 click submit, put thông tin đã nhận ở 3.2.3 lên database.
  const handleSubmitEDIT = async (event) => {
    event.preventDefault();
    console.log(edit);
    let dele = await api.put(`/update_product/${edit.id}`, edit);
    getUser();
  };

  // 4. hủy thao tác
  // 4.1 click button Cancel
  // 4.2 xóa dữ liêu form.
  const handleCancel = () => {};
  // END VIEW.
  return (
    <section className="home-admin">
      <div className="home-user home-right">
        <div className="col-12">
          <span className="btn add" onClick={handleClickADD}>
            Thêm tài khoản - Chuyển qua trang upload
          </span>
        </div>
        <div className="col-12">
          <div className="table">
            <table className="col-auto">
              <thead className="title">
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Kho</th>
                  <th>Giá</th>
                  <th>Danh mục</th>
                  <th>Ngày</th>
                  <th>PERFORM</th>
                </tr>
              </thead>
              <tbody>
                {state.data !== undefined
                  ? state.data.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td>{value.id}</td>
                          <td>{value.name}</td>
                          <td>{value.quantity_in_stock}</td>
                          <td>{value.price}</td>
                          <td>{value.cate_name}</td>
                          <td>Cập nhập</td>
                          <td className="td-group">
                            <span
                              className="btn delete"
                              onClick={() => deleteUser(value.id)}
                            >
                              Xóa
                            </span>
                            <span
                              className="btn edit"
                              onClick={() => handleClickEDIT(value.id, value)}
                            >
                              Sửa nhanh
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
            <Pagination onAddPage={onAddPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bill;
