## lerna命令和参数
1. lerna init 初始化lerna工程或将现有的仓库升级为适配当前 版本的 Lerna，--independent / -i 使用独立的版本控制模式
2. lerna bootstrap 在当前 Lerna 仓库中执行引导流程（bootstrap）。安装所有 依赖项并链接任何交叉依赖此`命令至关重要，因为它让你可以 在 require() 中直接通过软件包的名称进行加载，就好像此软件包已经存在于 你的 node_modules 目录下一样`
3. lerna import <pathToRepo> 将本地路径中的软件包导入（import） packages/<directory-name> 中并提交 commit。
4. lerna publish 为已经更新过的软件包创建一个新版本。提示 输入新版本号并更新 git 和 npm 上的所有软件包
   ### 参数
    - --npm-tag [tagname] — 使用给定的 npm dist-tag （默认为 latest）发布到 npm。
    - --canary/-c – 创建一个 canary 版本。

    - --skip-git – 不要运行任何 git 命令。

    - --force-publish [packages] — 强制发布 指定的一个或多个软件包（以逗号分隔）或使用 * 表示所有软件包（对于修改过的软件包跳过 git diff 检查）
5. lerna changed 检查自上次发布以来那些软件包被修改过
6. lerna diff [package?] 列出所有或者某些软件包自上次发布以来的修改情况
7. lerna run [script] 在每一个包含[script]脚本的软件包中运行此npm脚本
8. lerna ls 列出Lerna仓库中的所有公共软件包