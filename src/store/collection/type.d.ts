export interface IFilterOptions {
  branch: string;
  fieldOfficeName: string;
  collectionType: string;
  samityDay: string;
  block: string;
}

export interface ITotaling {
  members: number;
  loanReceible: number;
  collections: number;
  loan: number;
  gs: number;
  vs: number;
  dps: number;
}

export interface ICollection {
  sl: number;
  memberId: string;
  memberName: string;
  DWM: string | number;
  confirm: boolean;
  acNo: string;
  loanAmount: number;
  gsAmount: number;
  vsAmount: number;
  emdsAmount: number;
  loanCollectionSplit: {
    total: number;
    pa: number;
    sc: number;
  };
  loanRecoverable: {
    total: number;
    pa: number;
    sc: number;
  };
  loanDueAdvPASc: {
    new: number;
    closeing: number;
  };
  loanBalance: {
    total: number;
    pa: number;
    sc: number;
  };
  disburseDate: string;
  disbursedAmount: number;
  gsBalance: number;
  vsBalance: number;
  dpsBalance: number;
  guardianName: string;
}