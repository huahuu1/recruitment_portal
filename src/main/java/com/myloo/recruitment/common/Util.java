package com.myloo.recruitment.common;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

public class Util {

    public static Boolean isNullOrEmpty(String s) {
        if (s == null) {
            return true;
        }
        if (s.isEmpty()) {
            return true;
        }
        if ("".equals(s.trim())){
            return true;
        }
        return false;
    }

    public static Long objectToLong(Object o) {
        if (o == null) {
            return null;
        }
        return Long.parseLong(o.toString());
    }

    public static Integer objectToInteger(Object o) {
        if (o == null) {
            return null;
        }
        return Integer.parseInt(o.toString());
    }

    public static String objectToString(Object o) {
        if (o == null) {
            return null;
        }
        return o.toString();
    }

    public static Date objectToDate(Object o) {
        if (o == null) {
            return null;
        }
        return (Date)o;
    }

    public static List stringToList(String s) {
        if (s == null || "".equals(s)) {
            return null;
        }
        if (!s.contains(",")) {
            return new ArrayList(Arrays.asList(s));
        }
        return new ArrayList(Arrays.asList(s.split(",")));
    }
    public static String getJobTypeName(Long id) {
        if (id == null) {
            return null;
        }
        return Constant.JOBTYPE_LST.stream().filter(j -> j.getId() == id).findAny().orElse(null).getName();
    }

    public static String getSalaryName(Long id) {
        if (id == null) {
            return null;
        }
        return Constant.SALARY_LST.stream().filter(j -> j.getId() == id).findAny().orElse(null).getName();
    }

    public static void main(String[] args) throws Exception{

        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy", Locale.ROOT);
        Date firstDate = sdf.parse("06/24/2017");
        Date secondDate = sdf.parse("06/30/2017");

        long diffInMillies = Math.abs(secondDate.getTime() - firstDate.getTime());
        long diff = TimeUnit.MINUTES.convert(diffInMillies, TimeUnit.MILLISECONDS);
        System.out.println(diffInMillies);
        System.out.println(diff);
    }

    public static Long minutesBetweenTwoDate(Date date1, Date date2) {
        try {
            long diffInMillies = Math.abs(date2.getTime() - date1.getTime());
            long diff = TimeUnit.MINUTES.convert(diffInMillies, TimeUnit.MILLISECONDS);
            return diff;
        } catch (Exception e) {
            e.printStackTrace();
            return 500l;
        }
    }
}
