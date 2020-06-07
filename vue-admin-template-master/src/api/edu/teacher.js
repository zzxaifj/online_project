
import request from '@/utils/request'
const api_name = '/eduservice/teacher'

export default {
  //查询方法
  getPageList(current, limit, searchObj) {
    return request({
      url: `${api_name}/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

  //删除方法
  removeById(teacherId) {
    return request({
        url: `${api_name}/${teacherId}`,
        method: 'delete'
    })
  },

  //保存
  saveTeacher(teacher){
    return request({
      url: `${api_name}/addTeacher`,
      method: 'post',
      data: teacher
    })
  },

  //回显方法
  getTeacherInfo(id) {
    return request({
        url: `${api_name}/getTeacher/${id}`,
        method: 'get'
    })
  },

  //更新方法
  updateTeacherInfo(teacher) {
    return request({
        url: `${api_name}/updateTeacher`,
        method: 'put',
        data: teacher
    })
  }
}