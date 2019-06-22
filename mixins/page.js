export default {
	data() {
		return {
			// 页标题
			title: "",
			// 添加地址
			url_add: "",
			// 删除地址
			url_del: "",
			// 修改地址
			url_set: "",
			// 查询对象地址
			url_get_obj: "",
			// 查询列表地址
			url_get_list: "",
			// 导出地址
			url_export: "",
			// 导入地址
			url_import: "",
			// 表单提交地址
			url_submit: "",
			// 默认访问链接, 当单独链接没有时，访问默认链接
			url: "",
			/* === 缓存 === */
			// 显示方式
			display: "",
			// 加载进度, 小于100表示加载中，大于100表示加载完成
			loading: 0,
			// 当前索引
			index: 0,
			// 列数
			col: 4,
			// 总计
			count: 0,
			// 显示隐藏
			show: false,
			// 表单
			form: {},
			// 对象
			obj: {},
			// 列表
			list: [],
			// 验证模型
			check_model: {},
			// 重定向
			redirect: "/pages/account/signin",
			// 主键字段
			field: "id",
			// 查询
			query: {
				// 页数
				page: 1,
				// 大小
				size: 10
			},
			// 配置
			config: {
				// 唯一主键
				id: 0,
				// 页面
				page: 1,
				// 大小
				size: 10,
				// 默认状态
				state: 0
			},
			// 允许访问的用户组
			user_group: [],
			// 允许访问的管理组
			admin_group: [],
			// 允许访问的用户级别需多少以上
			vip: 0,
			// 允许访问的管理级别需多少以上
			gm: 0,
			// 允许访问的角色
			roles: [],
			// 身份验证
			oauth: false
		}
	},
	methods: {
		/// 添加
		add(val) {

		},

		/// 删
		del(query) {

		},

		/// 修改
		set(query, val) {

		},

		/// 查
		get(query) {
			if (this.url_get_obj) {
				this.get_obj(query);
			} else {
				this.get_list(query);
			}
		},

		/// 查一条
		get_obj(query) {
			var url = this.url_get_obj;
			if (url) {
				if (query) {
					this.$obj.push(this.query, query);
				}
				var _this = this;
				this.$get(this.toUrl(this.events('get_obj_before', this.query), url), function(json, status) {
					_this.events('get_obj_after', json, status);
				});
			}
		},

		/// 查列表
		get_list(query) {
			var url = this.url_get_list ? this.url_get_list : this.url;
			if (url) {
				if (query) {
					this.$obj.push(this.query, query);
				}
				var _this = this;
				this.$get(this.toUrl(this.events('get_list_before', this.query), url), function(json, status) {
					_this.events('get_list_after', json, status);
				});
			}
		},

		/// 导入
		import(file) {

		},

		/// 导出
		export (file, query) {

		},

		/// 回调函数
		/// name: 函数名
		/// param1: 参数1
		/// param2: 参数2
		/// param3: 参数3
		/// 返回: 任意类型
		func(name, param1, param2, param3) {
			var fun = this[name];
			if (fun) {
				return fun(param1, param2);
			} else {
				return null;
			}
		},

		/// 重置
		reset() {
			// 重置查询条件
			this.$obj.clear(this.query);
			this.$obj.push(this.query, this.config);
		},

		/// 搜索
		/// bl: 是否重置再搜索
		search(bl) {
			if (bl) {
				this.reset();
			}
			var url = this.toUrl(this.query, this.url);
			this.push(url);
		},

		/// 提交
		submit() {
			var url = this.url_submit;
			if (url) {
				var pass = this.events('submit_check', this.form);
				if (pass) {
					var _this = this;
					this.$post(url, this.events('submit_before', this.form), function(json, status) {
						_this.events('submit_after', json, status);
					});
				}
			}
		},

		/// 上下翻页
		/// n: 加减数
		go(n) {
			this.goTo(this.page + n);
		},

		/// 上下翻页
		/// page: 加减数
		goTo(page) {
			if (page < 1) {
				page = 1;
			} else if (page > this.page_count) {
				page = this.page_count;
			}
			this.page = page;
			this.get_list();
		},

		/// 转查询参数
		/// obj: 被转换的对象
		/// url: 请求地址
		/// 返回: url字符串
		toUrl(obj, url) {
			return this.$obj.toUrl(obj, url);
		},
		/// 登录验证
		check_oauth() {
			if (this.oauth) {
				var token = this.$store.state.user.token;
				if (!token) {
					this.$store.commit('set_redirect_url', this.$route.path + location.search);
					this.$router.push(this.redirect);
					return;
				}
			}
			this.get();
		},
		/// 初始化
		init() {
			this.$obj.push(this.query, this.$route.query);
			this.check_oauth();
		},

		/// 验证参数
		/// 返回: 验证通过空, 否则返回错误提示
		check(param, dict) {
			return true;
		},
		/// 警告
		alert(res) {
			console.log(res)
		},
		/// 事件管理, 用于管理函数
		/// name: 事件名
		/// param1: 参数1
		/// param2: 参数2
		/// 返回: 特定值
		events(name, param1, param2) {
			var func = this[name];
			if (func) {
				return func(param1, param2);
			} else {
				return null;
			}
		},

		/// 回调函数管理器
		/// fun: 函数名
		/// param1: 参数1
		/// param2: 参数2
		/// param3: 参数3
		/// 返回: 回调参数
		func(fun, param1, param2, param3) {
			var funObj = this[fun];
			if (funObj) {
				if (param1 === undefined) {
					return funObj()
				} else if (param2 === undefined) {
					return funObj(param1)
				} else if (param3 === undefined) {
					return funObj(param1, param2)
				} else {
					return funObj(param1, param2, param3);
				}
			} else {
				return null;
			}
		},

		/// 加载进度设置函数
		/// progress: 加载进度, 小于100表示加载中，大于100表示加载完成
		load(progress) {
			if (progress == undefined) {
				this.loading = 0;
			} else {
				this.loading = progress;
			}
		},
		/// 提交前验证事件
		/// form: 请求参数
		/// 返回: 转换后的结果
		submit_check(form) {
			return this.check(form, this.check_model);
		},
		/// 提交前验证事件
		/// req: 请求参数
		/// 返回: 转换后的结果
		submit_before(req) {
			return req;
		},
		/// 获取到对象后事件
		/// json: 响应结果
		/// status: 服务器状态码
		/// 返回: 转换后的结果
		submit_after(json, status) {
			this.alert(json);
		},
		/// 请求对象事件
		/// req: 请求参数
		/// 返回: 转换后的结果
		get_obj_before(req) {
			return req;
		},
		/// 获取到对象后事件
		/// json: 响应结果
		/// status: 服务器状态码
		/// 返回: 转换后的结果
		get_obj_after(json, status) {
			if (json.code) {
				this.alert(json);
			} else if (json.data) {
				this.$obj.clear(this.obj);
				this.$obj.push(this.obj, json.data);
			}
			if (this.url_get_list || this.url) {
				this.get_list();
			}
		},
		/// 请求列表前事件
		/// req: 请求参数
		/// 返回: 转换后的结果
		get_list_before(req) {
			return req;
		},
		/// 获取到列表事件
		/// json: 响应结果
		/// status: 服务器状态码
		/// 返回: 转换后的结果
		get_list_after(json, status) {
			if (json) {
				if (json.error) {
					this.alert(json);
				} else if (json.data) {
					this.list.eachPush(json.data.list);
				}
			}
		}
	},
	compuetd: {
		/// 分页数
		page_count() {
			return parseInt(this.count / this.size);
		}
	},
	onLoad() {
		this.init();
	}
};
