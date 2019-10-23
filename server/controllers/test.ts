const Mock = require('mockjs');
const Random = Mock.Random;
import * as Model from '../schemas';
import { IContext } from '../const/index';
const axios = require('axios')

export const getName = async (ctx: IContext, next: any) => {
  ctx.body = await Mock.mock({
    'arr|1-10': [{
      'id|+1': 1,
      'author|+1': Random.cname(),
      'img': Random.image('100x100'),
      'title': Random.csentence(5, 9)
    }]
  })
}

export const getData = async (ctx: IContext, next: any) => {
  ctx.body = await Mock.mock({
    'data|1-6': [{
      'id|+1': 1,
      'name|+1': Random.cname(),
      'img': Random.image('100x100'),
      'title': Random.csentence(5, 9),
      'data': Random.csentence(5, 9)
    }]
  })
}

export const getLocation = async (ctx: IContext, next: any) => {
  ctx.body = await Mock.mock({
    'data|1-10': [{
      'id|+1': 1,
      'location': ['@float( 113, 114 )', '@float( 22, 23 )']
    }]
  })
}

export const getCORSlocation = async (ctx: IContext, next: any) => {
  let data = await axios.get('http://d7jxd9.natappfree.cc/merchant/district/getOrderMerchant')
  ctx.body = data.data
}

export const createTest = async (ctx: IContext, next: any) => {
  let { name, age } = ctx.request.body;
  if (!name || !age) ctx.throw(400, '缺少必要数据')
  let newTest = await Model.Test.create({ name, age })
  if (!newTest) ctx.throw(400, '参数错误')
  else ctx.body = newTest
}