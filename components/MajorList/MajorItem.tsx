import * as S  from './styles'

interface propsType {
    max: number;
    now: number;
    className: string;
    imgSrc?: string;
    header: string;
    subHeader: string;
    description: string;
}

const MajorItem = (props: propsType) => {
    const {imgSrc, header, subHeader, description} = props

    return (
            <S.ItemWrapper max={props.max} now={props.now}>
                <div className={props.className}>
                    <S.PurpleBack />
                    <S.PointButton></S.PointButton>
                    <S.ItemImg src={`https://api.semicolon.live/file/` + imgSrc} />
                    <S.ItemFontWrapper>
                        <S.ItemHeader>{header}</S.ItemHeader>
                        <S.ItemSubHeader>{subHeader}</S.ItemSubHeader>
                        <S.ItemDesWrapper>
                            <S.ItemDes>{description}</S.ItemDes>
                        </S.ItemDesWrapper>
                    </S.ItemFontWrapper>
                    <S.ButtonsWrapper>
                        <S.RadiusButton active={true}>자세히보기</S.RadiusButton>
                    </S.ButtonsWrapper>
                    <S.IconWrapper>
                        <S.Icon src={`https://api.semicolon.live/file/` + imgSrc} />
                    </S.IconWrapper>
                    <S.IntroWrapper>
                        {description}
                        <S.FieldIconWrapper>

                        </S.FieldIconWrapper>
                    </S.IntroWrapper>
                </div>
            </S.ItemWrapper>
    )
}

export default MajorItem