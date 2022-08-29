//请求面试题分类信息
import $http from '@/servies/reques.js'
//查询面试题分类列表
//接口 /totipList
export const getClassList = ({
	pageSize,
	pageNume
}) => {
	return $http.request({
		url: '/totipList',
		method: 'GET',
		header: {
			"Content-Type": 'application/json'
		},
		data: {
			pageSize,
			pageNume
		}
	})
}


