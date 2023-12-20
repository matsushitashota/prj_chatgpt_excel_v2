# 使用方法

## git cloneした後に下記を実行しパッケージをインストール

```
yarn
```

## .envにopenaiのapikeyを設定
NEXT_PUBLIC_OPENAI_API_KEY=**************************

## 起動

```
yarn dev
```

## uploadするexcelファイルの形式
現在は調整中のために下記形式でしか出力できません。
見本ファイルはchatGPTと料金について.pptxと同階層のchatgpt_input_202320.xlsxとなります。

```
export type LineData = {
  no: string
  title: string
  head1: string
  head2: string
  head3: string
  head4: string
  content1: string
  content2: string
  content3: string
  content4: string
}
```