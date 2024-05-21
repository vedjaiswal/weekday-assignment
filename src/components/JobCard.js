import React from 'react'
import { Card, Avatar, Typography, Button, styled} from '@mui/material'

//person images
import person1 from '../assets/personImage1.png'
import person2 from '../assets/personImage2.png'

//utils
import { roleFormatting } from '../utils/roleFormatting'
import { locationFormatting } from '../utils/locationFormatting'
import { salaryFormatting } from '../utils/salaryFormatting'

const Wrapper = styled(Card)`
-webkit-box-shadow: 1px 2px 5px -1px rgba(26,22,26,0.31);
-moz-box-shadow: 1px 2px 5px -1px rgba(26,22,26,0.31);
box-shadow: 1px 2px 5px -1px rgba(26,22,26,0.31);
`

const CardHeader = styled('div')({
  display : 'flex',
  gap : '0.5rem'
})

const HeaderTitle = styled(Typography)`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 3px;
  color: #8b8b8b;
`

const HeaderSubTitle = styled(Typography)`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.5;
`

const HeaderSubText = styled(Typography)`
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px; 
`

const CardContent = styled('div')(({ isNull }) => ({
  height: isNull ? '300px' : '250px',
  overflow: 'hidden',
  maskImage : 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))'
}));

const SalaryTypography = styled(Typography)({
    fontWeight:500, 
    fontSize:14, margin:'8px 0px', 
    color: "rgb(77, 89, 106)", 
    lineHeight:1.43
})

const ViewJobContainer = styled('div')`
  text-align: center;
  margin-bottom: 0.5rem;
  position: relative;
  top: -20px;
`

const ViewJobText = styled('a')`
 color : #4943da;
 outline : none;
 cursor: pointer;
 text-decoration: none;
 font-size: 14px;
 font-weight: 300 ;
`

const MinExpText = styled(Typography)`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 3px;
    color: #8b8b8b;
`

const MinExpSubText = styled(Typography)`
font-size: 14px;
    line-height: 1.5;
    font-weight : 300;
`

const ButtonGroup = styled('div')`
flex-grow: 1;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
`

const EasyApplyButton = styled(Button)`
    width: 100%;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    font-weight: 500;
    padding: 8px 18px;
    text-transform : none;
    border-radius: 8px;
    margin: 5px 0;
    &:hover {
        background-color: rgb(85, 239, 196);
    }
`
const ReferralButton = styled(Button)`
    width: 100%;
    background-color: #4943DA;
    color: white;
    font-weight: 300;
    padding: 8px 18px;
    text-transform : none;
    border-radius: 8px;
    margin: 5px 0;
    gap : 5px;
    &:hover {
        background-color: #4943DA;
    }
`

const PersonAvatar = styled(Avatar)({
    width:30,
    height:30
})

function JobCard({ job }) {

  const salary = salaryFormatting(job.minJdSalary, job.maxJdSalary, job.salaryCurrencyCode);
  
  return (
    <Wrapper variant='outlined' sx={{ maxWidth: 345, padding:'16px', borderRadius:'20px' }}>
      <CardHeader>
        <div style={{ height : 40 , width : 40}}>
          <img style={{ height : 40 , width : 40, objectFit : 'cover'}} src={job.logoUrl} alt='logo' />
        </div>
        <div>
          <div>
            <HeaderTitle variant='h3'>{job.companyName}</HeaderTitle>
            <HeaderSubTitle>{roleFormatting(job.jobRole)}</HeaderSubTitle>
          </div>
          <HeaderSubText>{locationFormatting(job.location)}</HeaderSubText>
        </div>
      </CardHeader>
      {salary && <SalaryTypography >
        Estimated Salary : {salary} ✅
      </SalaryTypography>}
      <CardContent isNull={job.minExp === null}>
        <Typography style={{fontWeight:500, fontSize:'1rem', lineHeight:1.5}}>
            About Company:
        </Typography>
        <Typography style={{ fontSize:14, fontWeight:300, whiteSpace:'pre-wrap'}}>
            {job.jobDetailsFromCompany}
        </Typography>
      </CardContent>
        <ViewJobContainer>
            <ViewJobText href='#'>View job</ViewJobText>
        </ViewJobContainer>
        {job.minExp && <div style={{marginTop:10, paddingBottom:8}}>
            <MinExpText>Minimum Experience</MinExpText>
            <MinExpSubText>{job.minExp} years</MinExpSubText>
        </div>}
        <ButtonGroup>
            <EasyApplyButton>⚡ Easy Apply</EasyApplyButton>
            <ReferralButton>
                <PersonAvatar  src={person1} alt='person1' />
                <PersonAvatar src={person2} alt='person2' />
                &nbsp; Unlock referral asks
            </ReferralButton>
        </ButtonGroup>
    </Wrapper>
  )
}

export default JobCard