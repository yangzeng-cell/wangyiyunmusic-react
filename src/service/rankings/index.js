import httpRequest from '../request';

// 歌单评论接口
/**
 *
 * @param {*} id
 * @param {*} offset  偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param {*} limit 取出评论数量 , 默认为 20
 * @returns
 */
export const getCommentPlaylistAPI = (id, offset = 0, limit = 20) => {
  return httpRequest.get(
    `/comment/playlist?id=${id}&offset=${offset}&limit=${limit}`
  );
};

// 新版评论接口
/**
 *
 * @param {*} id 资源 id, 如歌曲 id,mv id
 * @param {*} type type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视 6: 动态
 * @param {*} sortType  排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
 * @param {*} pageSize 分页参数,每页多少条数据,默认 20
 * @returns
 */
export const getRecommendCommentListAPI = (
  id,
  type,
  sortType = 1,
  pageSize = 15
) => {
  return httpRequest.get(
    `/comment/new?type=${type}&id=${id}&sortType=${sortType}&pageSize=${pageSize}`
  );
};
